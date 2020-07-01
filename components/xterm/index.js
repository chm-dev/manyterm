/** @format */
const xtermConfig = require( "../../configs/config" ).xterm;
const jnata = require( "jsonata" );
const terminal = require( "./includes" );
const termsCount = jnata( '$count(**[componentName="xterm"])' );
terminals = {}; // TODO: ADD LET SO IT IS NOT A GLOBAL ON PROD

//  xterm componentState needs to include name, shell and shellArgs
mainLayout.registerComponent( "xterm", function ( container, componentState )
{
  let termCreated = false;
  container.on( "tab", _ => terminal.create( container, componentState ), i =>
  {
    container.off( "tab" );
    console.log( "off", i );
  } );
  mainLayout.on( "componentCreated", e =>
  {} );

  mainLayout.on( "initialised", ev =>
  {
    // document.querySelectorAll( '.xterm-container' ).forEach( el => {} );
  } );
  container.on( "resize", ev =>
  {
    if ( mainLayout.toConfig().content[0] )
      resizeAllTerminals();
  }
  );
} );
const resizeAllTerminals = _ =>
{
  if ( mainLayout.toConfig().content[0].content && mainLayout.toConfig().content[0].content.length > 0 && termsCount.evaluate( mainLayout.toConfig() ) == Object.keys( terminals ).length )
    setTimeout( () =>
    {
      for ( const term in terminals )
      {
        console.log( term );
        const t = terminals[term];
        t.fitAddon.fit();
        t.pty.resize( t.xterm.cols, t.xterm.rows ); // we have to resize pty after autofit calculates cols and rows
      }
    }, 500 );
};

// JUST FOR TESTS

xtermConfig.profiles.forEach( profile =>
{
  console.log( profile );
  addMenuItem( profile.name, "xterm", profile );
} );
