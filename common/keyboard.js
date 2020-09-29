const mousetrap = require( 'mousetrap' );

const { resizeLeft, resizeRight, traverseFwd, traverseBck } = require( '../components/palette/commands/terminal' );
const layout = require( '../components/palette/commands/layout' );
mousetrap.bind(
  'ctrl+tab',
  e => !e.shifKey
    ? traverseFwd()
    : traverseBck()
);
mousetrap.bind( 'F1', e => console.log( 'f1 - kbdjs' ) );

mousetrap.bind( 'alt+shift+left', e => {
  //if ( e.shiftKey == true )
  resizeLeft();
} );

mousetrap.bind( 'alt+shift+right', e => {
  console.log( 'alt-r' );
  //if ( e.shiftKey == true )
  resizeRight();
} );

// This is POC: iterate through commands and look for shortcuts to bind
// TODO: This needs more abstract implementation covering all commands

Object.keys( layout ).forEach( itm => {
  const itmObj = layout[itm];
  if ( itmObj.shortcut )
    mousetrap.bind( itmObj.shortcut, itmObj.command );
}
);
