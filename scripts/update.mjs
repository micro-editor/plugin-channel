// ~/index.mjs
// Searches GitHub for repositories with certain tags and adds them
// automatically to the plugin list.

import { log, fetch, exit, run, read, write } from './util.mjs'

const json = JSON

// First read the configuration
const config = await read('./config.json')

// Search GitHub for repositories tagged 'micro-editor-plugin'
const results = await fetch({
	method: 'get',
	hostname: `api.github.com`,
	path: `/search/repositories?q=${config.tags
		.map((tag) => `topic:${tag}`)
		.join('+')}`,
})

// Print an error and exit if we found no repositories
if (!results?.items) {
	log.error(
		'No repositories with the tag(s)',
		config.tags.join(', '),
		'were found'
	)

	exit()
}

// Get what we need from the API response
results.items = results.items
	.filter((repo) => !repo.archived)
	.map((repo) => {
		return {
			name: repo.full_name,
			defaultBranch: repo.default_branch,
		}
	})

// Get the ignore list
const ignoreList = await read(config.ignoreList)

// Loop through the repositories and add the plugins to the list
const pluginChannel = []
let pluginReadme = config.pluginReadmeHeader
for (let repo of results.items) {
	log.info('Found repository', repo.name)

	// Check for the metadata file in the root of the repository
	const hostname = 'raw.githubusercontent.com'
	const path = `/${repo.name}/${repo.defaultBranch}/${config.metadataFile}`
	const pluginMetadataUrl = hostname + path

	const response = await fetch({
		method: 'get',
		hostname,
		path,
	})
	if (response === 'Not Found') {
		log.error(
			'Could not find a metadata file',
			config.metadataFile,
			'in the repository due to the following error:',
			error
		)
		continue
	}

	let pluginMetadata = response[0]
	log.info('Found metadata file in repository')

	// Check if the metadata file is of a valid format
	if (
		typeof pluginMetadata.Name !== 'string' ||
		typeof pluginMetadata.Description !== 'string' ||
		(typeof pluginMetadata.Website !== 'undefined' &&
			typeof pluginMetadata.Website !== 'string') ||
		!Array.isArray(pluginMetadata.Tags) ||
		!Array.isArray(pluginMetadata.Versions) ||
		pluginMetadata.Tags.some((tag) => typeof tag !== 'string') ||
		pluginMetadata.Versions.some(
			(version) =>
				typeof version.Version !== 'string' ||
				typeof version.Url !== 'string' ||
				typeof version.Require !== 'object'
		)
	) {
		log.error(
			'This plugin',
			pluginMetadata.Name ?? '<unparseable>',
			'from the repo',
			repo.name,
			'has an invalid metadata file (repo.json)'
		)

		continue
	}
	pluginMetadata = {
		name: pluginMetadata.Name,
		description: pluginMetadata.Description,
		website: pluginMetadata.Website,
		tags: pluginMetadata.Tags,
		versions: pluginMetadata.Versions.map((version) => {
			return {
				number: version.Version,
				downloadUrl: version.Url,
				dependencies: version.Require,
			}
		}).sort((a, b) => (a.version > b.version ? 1 : -1)), // Latest version first
		metadataUrl: pluginMetadataUrl,
	}

	// Check that the plugin is not part of the ignore list
	if (
		ignoreList.some(
			(nameOrRepo) =>
				pluginMetadata.name === nameOrRepo || repo.name === nameOrRepo
		)
	) {
		log.error(
			'This plugin',
			pluginMetadata.name,
			'was found in the ignore list, skipping'
		)

		continue
	}

	// Add the plugin to the list
	pluginChannel.push(pluginMetadata.metadataUrl)

	// Add the plugin's information to the markdown table
	pluginReadme += `| \`${pluginMetadata.name}\` | ${
		pluginMetadata.description
	} | ${pluginMetadata.website ?? 'None'} | ${pluginMetadata.tags
		.map((tag) => `\`${tag}\``)
		.join(', ')} | [\`${pluginMetadata.versions[0].number}\`](${
		pluginMetadata.versions[0].downloadUrl
	}) | ${Object.entries(pluginMetadata.versions[0].dependencies)
		.map(([dependency, version]) => `\`${dependency}\` (\`${version}\`)`)
		.join(', ')} |\n`

	log.info('Added plugin', pluginMetadata.name)
}

// Save the plugin list, the generated markdown table and the channel
await Promise.all([
	write(config.pluginChannel, pluginChannel),
	write(config.pluginReadme, pluginReadme),
])

// Try running prettier over the files using `npx prettier`
await run(
	'npx prettier --use-tabs true --semi false --single-quote true --prose-wrap always --write .'
)

log.info('Succesfully saved list of plugins')
