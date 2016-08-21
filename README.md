# vscode-Hexo

> [Hexo] for the VSCode Editor.This repo is inspired by [vscode-npm](https://github.com/fknop/vscode-npm).

Provides [Hexo] `init`, `new`, `generate`, `server`, `deploy`, `publish`, `clean` commands in the VSCode Editor. 

## Install

1. Within Visual Studio Code, open the command palette (Ctrl-Shift-P / Cmd-Shift-P)
2. Select *Extensions:Install Extensions* or run *ext install* and search for 'hexo' 

## Usage

- Open your Hexo blog folder with the `File->Open Folder` menu

**Enjoy writing!**

## Commands

Press `Ctrl-Shift-P` / `Cmd-Shift-P` to bring up the list of commands, and type:

```bash
- hexo init         # Initializes a website
- hexo new          # Creates a new article
- hexo generate     # Generates static files
- hexo publish      # Publishes a draft
- hexo server       # Starts a local server
- hexo stop         # stop a local server(Ctrl-C)
- hexo deploy       # Deploys your website
- hexo clean        # Cleans the cache file (db.json) and generated files (public)
```

[Hexo]: http://hexo.io/