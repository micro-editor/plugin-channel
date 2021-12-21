// ~/util.mjs
// Utility functions

import process from 'node:process'
import https from 'node:https'
import { readFile, writeFile } from 'node:fs/promises'
import { execSync } from 'node:child_process'

const json = JSON

// A simple logger
export const log = {
	info: (...message) => {
		console.info('[info]', ...message)
	},
	warn: (...message) => {
		console.warn('[warn]', ...message)
	},
	error: (...message) => {
		console.info('[error]', ...message)
	},
}

// A wrapper around the built-in `https` module
export const fetch = async ({ method, hostname, path, headers }) => {
	return new Promise((resolve, reject) => {
		const request = https.request(
			{
				method,
				hostname,
				path,
				headers: {
					// The GitHub API requires a user agent
					'user-agent': 'micro plugin list updater',
					...headers,
				},
			},
			(response) => {
				let data = ''
				response.on('data', (chunk) => (data += chunk.toString()))
				response.on('end', () => {
					let parsedData = data
					try {
						parsedData = json.parse(data)
					} catch {}
					resolve(parsedData)
				})
			}
		)

		request.on('error', (error) => reject(error))
		request.end()
	})
}

// Exit the program
export const exit = (code = 1) => process.exit(code)

// Run a command
export const run = async (command) => {
	try {
		execSync(command)
	} catch {}
}

// Read JSON files
export const read = async (file) => {
	try {
		return json.parse(await readFile(file))
	} catch (error) {
		log.error('Could not parse', file, 'due to the following error:', error)

		process.exit(1)
	}
}

// Write JSON to a file
export const write = async (file, contents) => {
	try {
		return writeFile(
			file,
			typeof contents === 'object'
				? json.stringify(contents, undefined, 2)
				: contents
		)
	} catch (error) {
		log.error('Could not save', file, 'due to the following error:', error)

		process.exit(1)
	}
}
