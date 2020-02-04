# Micro Official Plugin Channel

This repository contains the 'channel.json' file which lists all official micro plugins. This is where the editor looks to search for plugins to install.

## Plugins

| Plugin          | Description                                             | Link                                                    |
| --------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `comment`       | Plugin to auto comment or uncomment lines               | https://github.com/micro-editor/comment-plugin          |
| `snippets`      | Provides snippets functionality                         | https://github.com/tommyshem/micro-snippets-plugin      |
| `go`            | Provides `gofmt` and `goimports` support for Go files   | https://github.com/micro-editor/go-plugin               |
| `fish`          | Provides `fishfmt` support for Fish files               | https://github.com/onodera-punpun/micro-fish-plugin     |
| `wc`            | Plugin to count words/characters                        | https://github.com/adamnpeace/micro-wc-plugin           |
| `fzf`           | Provides `fzf` support for opening files                | https://github.com/samdmarshall/micro-fzf-plugin        |
| `pony`          | Provides auto-indentation for Pony files                | https://github.com/Theodus/micro-pony-plugin            |
| `editorconfig`  | EditorConfig Support for micro                          | https://github.com/10sr/editorconfig-micro              |
| `crystal`       | Provides various `crystal` tools for crystal files      | https://github.com/ColinRioux/micro-crystal             |
| `gotham-colors` | A colorscheme for code that never sleeps in Gotham City | https://github.com/novln/micro-gotham-colors            |
| `misspell`      | Plugin that corrects commonly misspelled words          | https://github.com/onodera-punpun/micro-misspell-plugin |
| `monokai-dark`  | A dark monokai colorscheme                              | https://github.com/Theodus/micro-monokai-dark           |
| `scratch`       | Plugin to create scratch buffers                        | https://github.com/samdmarshall/micro-scratch-plugin    |
| `manipulator`   | Extend text manipulation abilities                      | https://github.com/NicolaiSoeborg/manipulator-plugin    |
| `filemanager`   | A file manager!                                         | https://github.com/NicolaiSoeborg/filemanager-plugin    |
| `vcs`           | Mark changed lines in Git or Mercurial repositories     | https://bitbucket.org/dermetfan/micro-vcs               |
| `fmt`           | A multi-language formatting plugin                      | https://github.com/sum01/fmt-micro                      |
| `joinLines`     | Plugin which joins selected lines or the following with the current | https://github.com/Lisiadito/join-lines-plugin |
| `bookmarks`     | Add and remove bookmarks                                | https://github.com/davidalbertainley/micro-bookmarks-plugin|
| `goto`          | Jump to line numbers                                    | https://github.com/davidalbertainley/micro-goto-plugin|

## Adding your own plugin

To add your own plugin, create a `repo.json` file containing all the metadata information for your plugin. See the Go plugin [repo.json](https://github.com/micro-editor/go-plugin/blob/master/repo.json) file as an example.

Then you can open a pull request which adds the link to that file to the `channel.json` file in this repo.
