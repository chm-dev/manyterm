module.exports = ( win, show = false ) => {
  if ( typeof show !== 'boolean' ) throw 'hide param must be a bool';
  //TODO: Move duration and fps to config
  const duration = 100;
  const fps = 60;
  const frameDelay = 1000 / fps;
  const frames = 60 * ( duration / 1000 );
  const stepSize = win.getBounds().height / frames;
  const step = show ? stepSize : 0-stepSize;
  // if ( show )
  //   win.setBounds( { y: win.getBounds().y - win.getBounds().height } );

  const currentBounds = win.getBounds();
  show ?
    win.show() :
    setTimeout( () => {
      win.hide();
    }, duration );

  for ( let i = 0; i < frames; i++ ) {
    console.log( currentBounds.y + step * i );
    setTimeout( () => {
      win.setBounds( { y: Math.floor( currentBounds.y + step * i ) } );
    }, frameDelay * i );
  }


};
