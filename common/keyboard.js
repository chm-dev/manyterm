const layoutCmds = require( '../components/palette/commands/layout' ),
  terminalCmds   = require( '../components/palette/commands/terminalCMD' );
let allShortcuts = [];

//iterate through commands and look for shortcuts to bind
// TODO: This needs more abstract implementation covering all commands
Mousetrap.bind( 'alt+f1', e => {
  document.querySelector( '.react-command-palette button' ).click();
} );
allShortcuts.push( 'alt+f1' );

Object.keys( layoutCmds ).forEach( itm => {
  const itmObj = layoutCmds[itm];
  if ( itmObj.shortcut ) {
    Mousetrap.bind( itmObj.shortcut, () => itmObj.command() );
    allShortcuts.push( itmObj.shortcut );
  }
} );
Object.keys( terminalCmds ).forEach( itm => {
  const itmObj = terminalCmds[itm];
  if ( itmObj.shortcut ) {
    Mousetrap.bind( itmObj.shortcut, () => itmObj.command() );
    allShortcuts.push( itmObj.shortcut );
  }
} );
setTimeout( _ => console.log( allShortcuts ), 500 );
module.exports = {
  allShortcuts: allShortcuts
};
