const { remote } = require( 'electron' );

const mainWindow = remote.getCurrentWindow();
mainWindow.on( 'focus', _=> document.body.classList.remove( 'inactive' ) );
mainWindow.on( 'blur', _=> document.body.classList.add( 'inactive' ) );
