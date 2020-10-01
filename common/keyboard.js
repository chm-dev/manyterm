const Mousetrap = require( 'mousetrap' );

let allShortcuts = [];
// const {   resizeLeft,   resizeRight,   traverseFwd,   traverseBck } = require( '../components/palette/commands/terminal' );
const layoutCmds = require( '../components/palette/commands/layout' );
const terminalCmds = require( '../components/palette/commands/terminalCMD' );

// mousetrap.bind(   'ctrl+tab',   e => !e.shifKey ?     traverseFwd() :     traverseBck() ); mousetrap.bind( 'alt+shift+left', e
// => {   if ( e.shiftKey == true )   resizeLeft(); } ); mousetrap.bind( 'alt+shift+right', e
// => {   console.log( 'alt-r' );   if ( e.shiftKey == true )   resizeRight(); } ); This is POC: iterate through commands and look
// for shortcuts to bind
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
// Mousetrap.prototype.handleKey = function ( ch, mod, e ) {   if ( e.type === 'keydown' && e.repeat === false )   if ( e.type ===
// 'keydown' )     allShortcuts.forEach( shc => {       let match = true;       match =         JSON.stringify( mod.concat( ch
// ).sort() ) ===         JSON.stringify( shc.split( '+' ).sort() );       match ? console.log( shc ) : false;     } ); };
