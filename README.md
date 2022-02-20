# manyTerm

## Tmux for the rest of us

<img src="./assets/out/terminal.png" style="width: 192px;" />

## This Working POC showcase

https://user-images.githubusercontent.com/11930016/154855947-cb96e9dc-7d7d-4d64-9be4-0f9321367ca7.mov

## Idea

Bring conviniance of workflow known from tools like tmux to desktop gui.
Terminal is main utility, but additional components are planned for complete workflow:

- Local and remote file manager.
  By default each terminal will have one instance behind it with current location in sync between them. (currently postponed because of problematic implementation of existing file management components)

- Monacco based text editor with linter and source code format tools.
  Will be capable of editing files directly from terminal and file manager.

- Easy plugin from

Main goal is to keep things as simple, performant and lightweight as possible by passing on all possible dependencies.

- No webpack, no babel

- ~~No React / Vue / Angular~~ React components (no babel = jsx replaced with [htm](https://github.com/developit/htm) )

- ~~Alpinejs for reactive features - https://github.com/alpinejs/alpine~~

- xterm webgl - for performance

## Libs used in POC

Tabs and panes with Golden Layout library - http://golden-layout.com/

Terminal with outstanding xterm.js project - https://xtermjs.org/

React

React command palette - https://github.com/asabaylus/react-command-palette

Monacco Editor

Electron - https://electronjs.org/

## Supported platforms

Currently main platform is windows but experimental mac osx build was succesfull, so it will be surely supported on mac os.

## Other tools

You can currently try similar pane workflow approach with

- Extraterm - https://extraterm.org/

- Sublime Text 3 with Terminus package - https://packagecontrol.io/packages/Terminus

- Theia for Electron - https://github.com/theia-ide/theia-apps
  (Early stage - app needs some extra work to make it usable)
