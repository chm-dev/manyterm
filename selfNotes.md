# General info

## react-command-pallete

- component code is modified because of focus managment.
- removed integrated into main.js mousetrap instance. Since mousetrap is used the only thing to make sure of is that mousetrap and moustrap-global-bind are loaded (currently loaded as globals in index.html via script tag)

## globals

This project uses global variables attached to window for dev & tinker ease.

These include:

### libs

- **jQuery**, **\$** - jQuery, mostly for goldenLayout's dependency
- **mainLayout** - GoldenLayout's initiated layout
- **Mousetrap** - Mousetrap's object

### data for componenet's use

- **terminals** - object which holds references to initated components (most important xterm, pty and gl container reference) --> this is probably not very safe and will be encapsulated in the end
- **componentConfigs** - configs of all shells from config.json --> just lazyness to progress quicker with development. Will be encapsulated most probably.
-
