const React = require( 'react' );
const ReactDOM = require( 'react-dom' );
const {
  create,
  getFocusedTerminalId
} = require( '../xterm/includes' );
const {
  default: CommandPalette
} = require( './main' );

const htm = require( 'htm' );

const html = htm.bind( React.createElement );
const {
  resizeLeft,
  resizeRight,
  traverseFwd,
  traverseBck
} = require( './commands/terminal' );
const layoutCommands = require( './commands/layout' );
let commands = [];
// const basicCommands = [   {     category: 'Layout',     command : toggleRowColumn,     id      : 1,     name    : 'Toggle Row /
// Column Layout'   } ];

let basicCommands = [];
Object.keys( layoutCommands ).forEach( ( cmd, i ) => {
  basicCommands.push( layoutCommands[ cmd ] );
} );

const terminalCommands = [
  {
    category: 'Terminal',
    command: function noRefCheck () {
      resizeLeft();
    },
    id: 1,
    name: 'Resize: Left'
  }, {
    category: 'Terminal',
    command: function noRefCheck () {
      resizeRight();
    },
    id: 2,
    name: 'Resize: Right'
  }
];

const updateCommands = () => {
  console.log( 'updating commands' );
  const wfLE = window.focusLaterElements;
  const daE = document.activeElemen;
  renderedPalette.setState( {
    commands: ( wfLE[ 0 ] && wfLE[ 0 ].tagName.toLowerCase() === 'textarea' ) || ( daE && daE.tagName.toLowerCase() ===
        'textarea' ) ?
      terminalCommands.concat( basicCommands ) : basicCommands
  } );
};

console.log( commands );

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

window.addEventListener( 'keydown', ev => {
  if ( ev.key === 'F10' ) {
    updateCommands();

    console.log( renderedPalette.state );
    // terminals[activeTerminalId].xterm.blur(); document.querySelector('.react-command-palette button').click();
  }
} );

class mtPalette extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
      commands: []
    };
    this.cpRef = React.createRef();
  }

  thisCommand ( suggestion ) {
    const {
      name,
      highlight,
      shortcut
    } = suggestion;

    const highlightRender = highlight ?
      html `<span setinnerhtml=${ {
        '__html'
        : highlight }} />` :
      html `<span>${name}</span>`;
    return html `<div className="item">
           ${highlightRender}
         
           <kbd className="atom-shortcut">${shortcut}</kbd>
      </div>
      `;

  }

  render () {
    return html `
      <${CommandPalette}
        ref=${this.cpRef}
        commands="${this.state.commands}"
        closeOnSelect=${true}
        hotKeys="f1"
        resetInputOnClose
        renderCommand=${this.thisCommand}
        shouldReturnFocusAfterClose
        onAfterOpen=${updateCommands}
        
      />
    `;
  }
}

const renderedPalette = ReactDOM.render( html `
    <${mtPalette} />
  `, document.getElementById( 'cmdPalette' ) );

// FIXME: remove below (debug only)
_rndr = renderedPalette;
commands = updateCommands();
module.exports = {
  renderedPalette: renderedPalette,
  updateCommands: updateCommands
};
