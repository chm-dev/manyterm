const {
  renderedPalette,
  updateCommands
} = require( '../../palette' );
const pidCwd = require( 'pid-cwd' );
const {
  remote,
  shell: electronShell
} = require( 'electron' );
const pty = remote.require( 'node-pty' );
const {
  Terminal
} = require( 'xterm' );
const {
  FitAddon
} = require( 'xterm-addon-fit' );
const {
  WebLinksAddon
} = require( 'xterm-addon-web-links' );
const {
  WebglAddon
} = require( 'xterm-addon-webgl' );
const {
  LigaturesAddon
} = require( 'xterm-addon-ligatures' );
const {
  Unicode11Addon
} = require( 'xterm-addon-unicode11' );
const {
  generateSimpleID
} = require( '../../../common' );
const {
  requireUncached
} = require( '../../../common' );
const xtermConfig = requireUncached( '../configs/config' ).xterm;
// TODO: consider dropping jnata dependency and use Golden Layout filter + vanilla js
const jnata = require( 'jsonata' );
const termCount = jnata( '$count(**[componentName="xterm"])' );
const thisLocale = require( 'electron' ).remote.app.getLocale();

const ptySpawn = ( sh, args, cwd = process.cwd(), env = process.env ) => {
  return pty.spawn( sh, args, {
    name: 'xterm-256color',
    cols: 120,
    rows: 40,
    cwd: cwd,
    env: {
      //     LANG     : (thisLocale || '') + '.UTF-8',
      TERM: 'xterm-256color',
      COLORTERM: 'truecolor',
      ...env
    }
  } );
};

function create( container, componentState, callback = null ) {
  if ( callback != null && typeof callback != 'function' ) {
    throw new TypeError( 'callback needs to be a function' );
  }
  /*
  xtermConfig -> general config taken from main xterm obj (config -> xterm)
  generalTerminalConfig -> general xterm opts,
  generalXtermTheme -> general theme holds two props: opacity and theme
  thisXtermConfig, thisXtermTheme ->  final settings
  */

  // get the config within a function so it remains unmutable split general settings to xterm general and theme opts
  const {
    terminal: generalTerminalConfig,
    theme: generalXtermTheme
  } = xtermConfig;

  // same for profile specific settings, retrieved from componentState
  const {
    shell,
    shellArgs,
    theme: profileTheme,
    opacity: profileOpacity
  } = componentState;

  // get final theme (depending on profile theme)
  let thisXtermTheme =
    profileTheme && profileTheme.background ? profileTheme : generalXtermTheme.theme ? generalXtermTheme.theme : undefined;

  // find applicable opacity and add it to bg if defined

  const thisOpacity =
    profileOpacity && profileOpacity > 0 && profileOpacity <= 255 ?
    profileOpacity.toString( 16 ) :
    generalXtermTheme.opacity && generalXtermTheme.opacity > 0 && generalXtermTheme.opacity <= 255 ?
    generalXtermTheme.opacity :
    undefined;

  // put background color to separate const and make theme bg transparent
  // this is to apply actual terminal background color to the whole component container
  // rether then xterm theme. looks and behaves much better
  let thisXtermBackground = thisXtermTheme.background.slice( 0, 7 );
  thisXtermTheme.background = 'transparent';
  if ( thisOpacity ) {
    thisXtermBackground += thisOpacity.toString( 16 ); //=
  }

  const thisXtermConfig = JSON.parse( JSON.stringify( generalTerminalConfig ) );
  thisXtermConfig.theme = JSON.parse( JSON.stringify( thisXtermTheme ) );

  console.log( thisXtermConfig ); //=

  const thisPTY = ptySpawn( shell, shellArgs );

  const thisXterm = new Terminal( thisXtermConfig );
  const fitAddon = new FitAddon();
  const webglAddon = new WebglAddon();
  const ligaturesAddon = new LigaturesAddon();
  const unicode11Addon = new Unicode11Addon();
  const thisSimpleID = generateSimpleID();
  const thisContainer = container.getElement().get( 0 ); // inject terminal into this element
  thisContainer.id = thisSimpleID;
  thisContainer.style.backgroundColor = thisXtermBackground;

  let cwdTimer;
  let cwd;
  // FIXME: Investigate errors on terminal close  ;)
  const endSession = () => {
    if ( typeof terminals[ thisSimpleID ] == 'object' ) {
      thisXterm.dispose();
      if ( thisPTY ) thisPTY.destroy();
    }
    delete terminals[ thisSimpleID ];
    container.off( 'destroy' );
  };

  const closeContainer = () => {
    container.close();
    endSession();
  };

  //addons
  thisXterm.loadAddon( fitAddon );
  // LINKS ARE ALWAYS OPENED WITH DEFAULT EXTERNAL BROWSER
  thisXterm.loadAddon(
    new WebLinksAddon( ( ev, url ) => {
      electronShell.openExternal( url );
    } )
  );
  //passing all key events to document root
  thisXterm.attachCustomKeyEventHandler( ev => {
    if ( ev.repeat === false ) document.dispatchEvent( new ev.constructor( ev.type, ev ) );
    //   }
  } );

  //thisXterm.loadAddon(unicode11Addon); thisXterm.unicode.activeVersion = "11";

  thisXterm.onData( data => {
    thisPTY.write( data );
  } );

  thisPTY.on( 'data', function ( data ) {
    // This bit allows to determine if cwd of a terminal has changed each GL terminal component has cwd prop with current location
    // NOTE: cwd = location of main process/shell. ie if you start zsh from bash cwd will remain at original bash location regardless
    // of zsh navigation actions

    // TODO: [FM postponed] emit global event and use it to sync with fm

    if ( typeof cwdTimer != 'undefined' ) clearTimeout( cwdTimer );
    cwdTimer = setTimeout( async _ => {
      const newCwd = await pidCwd( thisPTY.pid );
      if ( newCwd !== cwd ) {
        cwd = newCwd;
        container.extendState( {
          cwd: cwd
        } );
      }
    }, 400 );

    thisXterm.write( data );
    // console.log(data); console.log(tf8Array .from(data));
  } );
  thisPTY.on( 'error', data => {
    thisXterm.write( data );
  } );

  thisPTY.on( 'exit', ( code, signal ) => {
    console.log( 'CLOSING Container ' );
    closeContainer();
  } );

  container.on( 'destroy', endSession );

  //TODO: add event 'first drop' to layout manager instead of below 

  setTimeout( () => {
    thisXterm.open( thisContainer );
    thisXterm.loadAddon( ligaturesAddon );
    thisXterm.loadAddon( webglAddon );
    container.parent.addId( thisSimpleID );
    resizeAllTerminals();
  }, 500 );
  // Structure of terminals global (will be prop of an object later on)::
  terminals[ thisSimpleID ] = {
    container: container,
    fitAddon: fitAddon,
    webglAddon: webglAddon,
    xterm: thisXterm,
    pty: thisPTY
  };

  container.off( 'tab' );
}

function getFocusedTerminalId( activeEl = window.focusLaterElements[ 0 ] || document.activeElement ) {
  if ( activeEl.tagName.toLowerCase() == 'body' ) return false;

  const thisContainer = activeEl.closest( '.lm_item_container .lm_content' );
  return thisContainer.id;
}

const resizeAllTerminals = _ => {
  if (
    mainLayout.toConfig().content[ 0 ].content &&
    mainLayout.toConfig().content[ 0 ].content.length > 0 &&
    termCount.evaluate( mainLayout.toConfig() ) == Object.keys( terminals ).length
  ) setTimeout( () => {
    for ( const term in terminals ) {
      const t = terminals[ term ];
      t.fitAddon.fit();
      t.pty.resize( t.xterm.cols, t.xterm.rows ); // we have to resize pty after autofit calculates cols and rows
    }
  }, 50 );
};

module.exports = {
  create: create,
  getFocusedTerminalId: getFocusedTerminalId,
  resizeAllTerminals: resizeAllTerminals
};
