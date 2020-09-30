const xtermConfig = require( '../../configs/config' ).xterm;
const terminal = require( './includes' );
const {
  resizeAllTerminals
} = terminal;

//  xterm componentState needs to include name, shell and shellArgs
mainLayout.registerComponent( 'xterm', function ( container, componentState ) {
  let termCreated = false;
  container.on( 'tab', _ => terminal.create( container, componentState ), i => {
    container.off( 'tab' );
    console.log( 'off', i );
  } );
  mainLayout.on( 'componentCreated', e => {} );

  mainLayout.on( 'initialised', ev => {
    // document.querySelectorAll( '.xterm-container' ).forEach( el => {} );
  } );
  container.on( 'resize', ev => {
    if ( mainLayout.toConfig().content.length > 0 )
      resizeAllTerminals();
  } );
} );

// JUST FOR TESTS

xtermConfig.profiles.forEach( profile => {
  console.log( profile );
  addMenuItem( profile.name, 'xterm', profile );
} );
