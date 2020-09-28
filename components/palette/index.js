const React = require('react');
const ReactDOM = require('react-dom');
const {create, getFocusedTerminalId} = require('../xterm/includes');
const {default: CommandPalette} = require('./main');

const htm = require('htm');

const html = htm.bind(React.createElement);
const {resizeLeft, resizeRight, traverseFwd, traverseBck} = require('./commands/terminal');
let commands = [];
const basicCommands = [
  {
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
    shortcut: 'ctrl+a'
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

const terminalCommands = [
  {
    category: 'Terminal',
    command : function noRefCheck() {
      resizeLeft();
    },
    id      : 1,
    name    : 'Resize: Left'
  }, {
    category: 'Terminal',
    command : function noRefCheck() {
      resizeRight();
    },
    id      : 2,
    name    : 'Resize: Right'
  }
];

const updateCommands = () => {
  console.log('updating commands');
  const wfLE = window.focusLaterElements;
  const daE = document.activeElemen;
  renderedPalette.setState({
    commands: (wfLE[0] && wfLE[0].tagName.toLowerCase() === 'textarea') || (daE && daE.tagName.toLowerCase() === 'textarea')
      ? terminalCommands
      : basicCommands
  });
};

console.log(commands);

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

window.addEventListener('keydown', ev => {
  if (ev.key === 'F10') {
    updateCommands();

    console.log(renderedPalette.state);
// terminals[activeTerminalId].xterm.blur(); document.querySelector('.react-command-palette button').click();
  }
});

class mtPalette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commands: []
    };
    this.cpRef = React.createRef();
  }

  render() {
    return html `
      <${CommandPalette}
        ref=${this.cpRef}
        commands="${this.state.commands}"
        closeOnSelect=${true}
        hotKeys="f1"
        resetInputOnClose
        shouldReturnFocusAfterClose
        onAfterOpen=${updateCommands}
      />
    `;
  }
}

const renderedPalette = ReactDOM.render(html `
    <${mtPalette} />
  `, document.getElementById('cmdPalette'));

// FIXME: remove below (debug only)
_rndr          = renderedPalette;
commands       = updateCommands();
module.exports = {
  renderedPalette: renderedPalette,
  updateCommands : updateCommands
};
