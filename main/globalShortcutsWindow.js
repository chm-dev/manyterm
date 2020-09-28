const { globalShortcut, app, screen } = require( 'electron' );
const toggleAnimation = require( './toggleAnimation' );

let winIsFocused;
let toggleTimeout = false;

app.on( 'will-quit', () => {
  globalShortcut.unregisterAll();
} );

//TODO: define shortcuts in config
module.exports = win => {
  win.on( 'focus', () => ( winIsFocused = true ) );
  win.on( 'blur', () => ( winIsFocused = false ) );

  globalShortcut.register( 'Alt + `', () => {
    console.log( toggleTimeout );
    if ( toggleTimeout === false ) {
      win.isVisible()
        ? (
          winIsFocused
            ? toggleAnimation( win, false )
            : win.focus()
        )
        : toggleAnimation( win, true );
      toggleTimeout = true;
      setTimeout( () => {
        toggleTimeout = false;
      }, 200 /* TODO: change 200 to duration +10% */ );
    }
  } );

  globalShortcut.register( 'Alt + Shift + `', () => {
    win.show();
    if ( win.isMaximized() )
      win.restore();
    const display = screen.getDisplayMatching( win.getBounds() );
    win.setBounds( {
      width : display.bounds.width,
      height: display.bounds.height / 2,
      x     : display.bounds.x,
      y     : display.bounds.y
    } );
  } );

};
