# Micro Official Plugin Channel

This repository contains the 'channel.json' file which lists all official micro plugins. This is where the editor looks to search for plugins to install.

## Plugins

| Plugin          | Description                                             | Link                                                       | 2.0 Support                              |
| --------------- | ------------------------------------------------------- | -------------------------------------------------------    | ---------------------------------------- |
| `comment`       | Plugin to auto comment or uncomment lines               | https://github.com/micro-editor/comment-plugin             | :heavy_check_mark: (provided by default) |
| `snippets`      | Provides snippets functionality                         | https://github.com/micro-editor/updated-plugins/tree/master/micro-snippets-plugin         | :heavy_check_mark:                       |
| `go`            | Provides `gofmt` and `goimports` support for Go files   | https://github.com/micro-editor/go-plugin                  | :heavy_check_mark:                       |
| `fish`          | Provides `fishfmt` support for Fish files               | https://github.com/onodera-punpun/micro-fish-plugin        | :heavy_check_mark:                       |
| `wc`            | Plugin to count words/characters                        | https://github.com/adamnpeace/micro-wc-plugin              | :heavy_check_mark:                       |
| `fzf`           | Provides `fzf` support for opening files                | https://github.com/samdmarshall/micro-fzf-plugin           | :heavy_check_mark:                       |
| `pony`          | Provides auto-indentation for Pony files                | https://github.com/Theodus/micro-pony-plugin               | :heavy_check_mark:                       |
| `editorconfig`  | EditorConfig Support for micro                          | https://github.com/10sr/editorconfig-micro                 | :heavy_check_mark:                       |
| `crystal`       | Provides various `crystal` tools for crystal files      | https://github.com/ColinRioux/micro-crystal                | :heavy_check_mark:                       |
| `gotham-colors` | A colorscheme for code that never sleeps in Gotham City | https://github.com/novln/micro-gotham-colors               | :heavy_check_mark: (provided by default) |
| `misspell`      | Plugin that corrects commonly misspelled words          | https://github.com/onodera-punpun/micro-misspell-plugin    | :heavy_check_mark:                       |
| `monokai-dark`  | A dark monokai colorscheme                              | https://github.com/Theodus/micro-monokai-dark              | :heavy_check_mark: (provided by default) |
| `scratch`       | Plugin to create scratch buffers                        | https://github.com/samdmarshall/micro-scratch-plugin       | :x:                                      |
| `manipulator`   | Extend text manipulation abilities                      | https://github.com/NicolaiSoeborg/manipulator-plugin       | :heavy_check_mark:                       |
| `filemanager`   | A file manager!                                         | https://github.com/NicolaiSoeborg/filemanager-plugin       | :heavy_check_mark:                       |
| `vcs`           | Mark changed lines in Git or Mercurial repositories     | https://bitbucket.org/dermetfan/micro-vcs                  | :heavy_check_mark: (provided by default) |
| `fmt`           | A multi-language formatting plugin                      | https://github.com/sum01/fmt-micro                         | :x:                                      |
| `joinLines`     | Plugin which joins selected lines or the following with the current | https://github.com/Lisiadito/join-lines-plugin | :heavy_check_mark:                       |
| `bounce`     | Plugin that implements nano-style smart home and bouncing the cursor between matching-brackets | https://github.com/deusnefum/micro-bounce | :heavy_check_mark:                       |
| `quoter`     | Plugin that allows you to add quotes or brackets around selected text | https://github.com/deusnefum/micro-quoter | :heavy_check_mark:                       |
| `zigfmt`        | Provides `zig fmt` integration for Zig files            | https://github.com/squeek502/micro-zigfmt                  | :heavy_check_mark:                       |
| `jlabbrev`      | Provides backslash abbreviations from the julia prompt  | https://github.com/MasFlam/jlabbrev                        | :heavy_check_mark:                       |
| `nord-colors`   | A set of dark and light colorschemes based on Nord      | https://github.com/KiranWells/micro-nord-tc-colors         | :heavy_check_mark:                       |
| `yapf`          | Runs `yapf` in place when saving python files           | https://github.com/a11ce/micro-yapf                        | :heavy_check_mark:                       |
| `bookmark`      | Bookmark lines and quickly jump between saved positions | https://github.com/haqk/micro-bookmark                     | :heavy_check_mark:                       |
| `quickfix`      | Adds a functionality similar to VIM quickfix pane       | https://github.com/serge-v/micro-quickfix                  | :heavy_check_mark:                       |
| `jump`      | Jump to any function, class or heading with F4. Go, Markdown, Python, C and in 40 other languages | https://github.com/terokarvinen/micro-jump   | :heavy_check_mark:      |
| `detectindent`  | Automatically detect indentation settings               | https://github.com/dmaluka/micro-detectindent              | :heavy_check_mark:                       |
| `findinfolder`  | Folder search support                                   | https://gitlab.com/taconi/micro-findinfolder               | :heavy_check_mark:                       |


## Adding your own plugin

To add your own plugin, create a `repo.json` file containing all the metadata information for your plugin. See the Go plugin [repo.json](https://github.com/micro-editor/go-plugin/blob/master/repo.json) file as an example.

Then you can open a pull request which adds the link to that file to the `channel.json` file in this repo.
