const React = require('react');
const ReactDOM = require('react-dom');
const {default: CommandPalette} = require('react-command-palette');
const htm = require('htm');

const html = htm.bind(React.createElement)
const {resizeLeft, resizeRight, traverseFwd, traverseBck} = require('./commands/terminal');
let focusedBeforeOpen;

const commands = [
  {
    category: 'Resize',
    command : function noRefCheck() {
      resizeLeft(focusedBeforeOpen)
    },
    id      : 1,
    name    : 'Resize: Left'
  }, {
    category: 'Resize',
    command : function noRefCheck() {
      resizeRight(focusedBeforeOpen)
    },
    id      : 2,
    name    : 'Resize: Right'
  }, {
    category: 'Command',
    command : function noRefCheck() {},
    id      : 3,
    name    : 'Delete All Tenant'
  }, {
    category: 'Network',
    command : function noRefCheck() {
      console.log('Go offline triggered');
    },
    id      : 4,
    name    : 'Go offline',
    shortcut: 'ctrl+m'
  }, {
    category: 'Network',
    command : function noRefCheck() {},
    id      : 5,
    name    : 'Go online'
  }, {
    category: 'Navigate',
    command : function noRefCheck() {},
    id      : 6,
    name    : 'Jump to Tenant'
  }, {
    category: 'Navigate',
    command : function noRefCheck() {},
    id      : 7,
    name    : 'View Logs '
  }, {
    category: 'System',
    command : function noRefCheck() {},
    id      : 8,
    name    : 'Show Memory'
  }, {
    category: 'System',
    command : function noRefCheck() {},
    id      : 9,
    name    : 'Show CPU'
  }, {
    category: 'System',
    command : function noRefCheck() {},
    id      : 10,
    name    : 'Show Disk Usage'
  }, {
    category: 'Command',
    command : function noRefCheck() {},
    id      : 11,
    name    : 'Export Tenant'
  }, {
    category: 'Drawer',
    command : function noRefCheck() {},
    id      : 12,
    name    : 'Toggle drawer',
    shortcut: 'Esc'
  }
];

/*
ReactDOM.render(React.createElement(CommandPalette.default, {
  commands                   : commands,
  hotKeys                    : 'f1',
  shouldReturnFocusAfterClose: true,
  showSpinnerOnSelect        : false,
  closeOnSelect              : true,
  trigger                    : 'F1',

  onRequestClose             : _ => focusedBeforeOpen = null

}), document.getElementById('cmdPalette'));
 */

ReactDOM.render(html `<${CommandPalette} commands=${commands} hotKeys='f2' />`, document.getElementById('cmdPalette'))


window.addEventListener('keydown', ev => {
  console.log(ev);

  if (ev.key === "F1") {
    focusedBeforeOpen = document.activeElement;
    console.log(focusedBeforeOpen);
  }

})
