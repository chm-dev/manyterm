const os = require( 'os' );
const xtermConfig = require( '../../configs/config' ).xterm;
const jnata = require( 'jsonata' );
const pty = require( 'node-pty' );
const {
  Terminal
} = require( 'xterm' );
const {
  FitAddon
} = require( 'xterm-addon-fit' );
const {
  WebLinksAddon
} = require( 'xterm-addon-web-links' );

const termsCount = jnata( '$count(**[componentName="xterm"])' );
const terminals = {};

const generateSimpleID = _ => {
  return Date.now();
};

const ptySpawn = ( sh, args ) => {
  const currentPTY = pty.spawn( sh, args, {
    name: 'xterm-color',
    cols: 120,
    rows: 40,
    cwd: process.cwd(),
    env: process.env
  } );
  return currentPTY;
};

//  xterm componentState need to include name, shell and shellArgs
mainLayout.registerComponent( 'xterm', function( container, componentState ) {
  const shell = componentState.shell;
  const shellArgs = componentState.shellArgs;
  let termCreated = false;
  console.log( componentState );

  const thisSimpleID = generateSimpleID();

  container.on( 'tab', _ => {
    if ( termCreated === false ) {
      const el = container.getElement().get( 0 ); // inject terminal into this element
      const thisPTY = ptySpawn( shell, shellArgs );
      const thisXterm = new Terminal( xtermConfig.terminal );
      const fitAddon = new FitAddon();

      const closeThis = _ => {
        if ( typeof terminals[ thisSimpleID ] == 'object' ) {
          console.log( `delete ${terminals[thisSimpleID]} ` );
          delete terminals[ thisSimpleID ];
          thisPTY.destroy();
          thisXterm.dispose();
        }
      };

      thisXterm.loadAddon( fitAddon );
      thisXterm.loadAddon( new WebLinksAddon() );

      thisXterm.onData( data => {
        thisPTY.write( data );
      } );
      thisPTY.on( 'data', function( data ) {
        thisXterm.write( data );
      } );
      thisPTY.on( 'error', data => {
        thisXterm.write( data );
      } );

      thisPTY.on( 'exit', ( code, signal ) => {
        closeThis();
      } );
      container.on( 'destroy', closeThis );

      //FIXME: PLEASE  add event 'first drop' to layout manager;)
      setTimeout( () => {
        thisXterm.open( el );
      }, 100 );
      // Structure of terminals global (will be prop of an object later on)::
      terminals[ thisSimpleID ] = {
        container: container,
        fitAddon: fitAddon,
        xterm: thisXterm,
        pty: thisPTY
      };
    }
  } );
} );

mainLayout.on( 'componentCreated', e => {} );

mainLayout.on( 'initialised', ev => {
  // document.querySelectorAll( '.xterm-container' ).forEach( el => {} );
} );
mainLayout.on( 'stateChanged', ev => {
  console.log( ev );
  resizeAllTerminals();
} );

const resizeAllTerminals = _ => {
  if ( mainLayout.toConfig().content[ 0 ].content.length > 0 && termsCount.evaluate( mainLayout.toConfig() ) == Object
    .keys( terminals ).length )
    setTimeout( () => {
      for ( const term in terminals ) {
        console.log( term );
        terminals[ term ].fitAddon.fit();
        terminals[ term ].pty.resize( terminals[ term ].xterm.cols, terminals[ term ].xterm
        .rows ); // we have to resize pty after autofit calculates cols and rows
      }
    }, 500 );
};

// JUST FOR TESTS

xtermConfig.profiles.forEach( profile => {
  console.log( profile );
  addMenuItem( profile.name, 'xterm', profile );
} );
