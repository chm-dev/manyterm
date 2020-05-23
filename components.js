const jnata = require( 'jsonata' );
const pty = require( 'node-pty' );
const os = require( 'os' );

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

const layoutConfig = {
  content: [ {
    type: 'row',
    content: [ {
      type: 'component',
      componentName: 'xterm'
    }, {
      type: 'column',
      content: [ {
        type: 'component',
        componentName: 'xterm'
      } ]
    } ]
  } ]
};

let terminals = {};

const generateSimpleID = _ => {
  return Date.now();
};

const ptySpawn = _ => {
  // Note: this is POC so shells are hardcoded at this point.
  const isWin = os.platform() === 'win32' ?
    true :
    flase;
  const shell = isWin ?
    'cmd.exe' :
    'bash';
  const shellArgs = isWin ?
    Math.floor( Math.random() * Math.floor( 2 ) ) !== 0 ?
      [ '/k', 'D:/cygwin64/Cygwin.bat' ] :
      [ '/k', 'C:/Utils/cmder/vendor/init.bat', '/f' ] :
    [];

  const currentPTY = pty.spawn( shell, shellArgs, {
    name: 'xterm-color',
    fontSize: 14,
    cols: 200,
    rows: 0,
    cwd: process.cwd(),
    env: process.env
  } );
  return currentPTY;
};

var addMenuItem = function( title, text ) {
  var element = $( '<li>' + text + '</li>' );
  $( '#menuContainer' ).append( element );

  var newItemConfig = {
    title: title,
    type: 'component',
    componentName: 'xterm'
  };

  defaultLayout.createDragSource( element, newItemConfig );
};

// build a layout
const defaultLayout = new GoldenLayout( layoutConfig );
// register component
defaultLayout.registerComponent( 'xterm', function( container, componentState ) {
  //container.getElement().html( '<div class="xterm-container"></div>' );
  const thisSimpleID = generateSimpleID();
  console.log( 'simpleID', thisSimpleID );

  const el = container.getElement().get( 0 ); // inject terminal into this element
  const thisPTY = ptySpawn();
  const thisXterm = new Terminal( {
    fontFamily: 'Consolas NF',
    windowsMode: true,
    cols: 120
  } );
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
} );
defaultLayout.on( 'componentCreated', e => {} );

defaultLayout.on( 'initialised', ev => {
  // document.querySelectorAll( '.xterm-container' ).forEach( el => {} );
} );
defaultLayout.on( 'stateChanged', ev => {
  console.log( ev );

  resizeAllTerminals();
} );

resizeAllTerminals = _ => {
  if ( defaultLayout.toConfig().content[ 0 ].content.length > 0 && termsCount.evaluate( defaultLayout.toConfig() ) ==
    Object.keys( terminals ).length )
    setTimeout( () => {
      for ( const term in terminals ) {
        console.log( term );
        terminals[ term ].fitAddon.fit();
        terminals[ term ].pty.resize( terminals[ term ].xterm.cols, terminals[ term ].xterm
        .rows ); // we have to resize pty after autofit calculates cols and rows
      }
    }, 500 );
};
( '' );
