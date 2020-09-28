const path = require( 'path' );
const url = require( 'url' );
const { spawn } = require( 'child_process' );
require( 'v8-compile-cache' );

const { app, BrowserWindow } = require( 'electron' );
const Store = require( 'electron-store' );
const store = new Store();

require( 'electron-reload' )( __dirname, {
  electron: path.join( __dirname, 'node_modules', '.bin', 'electron' )
} );

const { transformHwnd, bounds } = require( './common' );
const { devTools } = require( './configs/config' );
const registerGlobalShortcutsWindow = require( './main/globalShortcutsWindow' );

app.allowRendererProcessReuse = true;
// Module to create native browser window.
app.commandLine.appendSwitch( 'disable-smooth-scrolling' ); // Turn off the sluggish scrolling.
app.commandLine.appendSwitch( 'high-dpi-support', 'true' );
// app.commandLine.appendSwitch( "disable-color-correct-rendering" ); Keep a global reference of the window object, if you don't,
// the window will be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const isWindows = process.platform === 'win32';
const isLinux = process.platform === 'linux';
const isDarwin = process.platform === 'darwin';

function initialize () {
// Create the browser window.

  mainWindow = new BrowserWindow( {
    webPreferences: {
      nodeIntegration: true
    },
    width         : bounds( store ).width,
    height        : bounds( store ).height,
    x             : bounds( store ).x,
    y             : bounds( store ).y,
    frame         : false,
    thickFrame    : true,
    transparent   : true,
    hasShadow     : false
  } );
  registerGlobalShortcutsWindow( mainWindow );

  //TODO: Make new module in /main/ for the below

  mainWindow.on( 'resize', () => {
    store.set( 'bounds', mainWindow.getBounds() );
  } );
  mainWindow.on( 'maximize', () => {
    store.set( 'bounds', mainWindow.getBounds() );
  } );


  BrowserWindow.addDevToolsExtension( './debug/devtools-react' );

  //registerGlobalShortcuts(); and load the index.html of the app.
  mainWindow.loadURL( url.format( {
    pathname: path.join( __dirname, 'index.html' ),
    protocol: 'file:',
    slashes : true
  } ) );

  if ( isWindows ) {
    spawn( './libs/win32/SetWindowCompositionAttribute.exe', [
      'hwnd',
      transformHwnd( mainWindow.getNativeWindowHandle() ),
      'accent',
      '3',
      '1',
      '00000000',
      '0'
    ] );
    //spawn('./assets/slide/slide.exe');
  }
  /*TODO: think of more elegant solution ;) */
  //*fork("./components/filemanager/server.js");

  //* Open the DevTools. mainWindow.webContents.openDevTools() Emitted when the window is closed.

  mainWindow.on( 'closed', function () {
    // Dereference the window object, usually you would store windows in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  } );
  if ( devTools )
    mainWindow.openDevTools();
}

// This method will be called when Electron has finished initialization and is ready to create browser windows. Some APIs can only
// be used after this event occurs.
app.on( 'ready', _ => {
  initialize();
} );

// Quit when all windows are closed.
app.on( 'window-all-closed', function () {
// On OS X it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
  if ( process.platform !== 'darwin' ) {
    app.quit();
  }
} );

app.on( 'activate', function () {
// On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
  if ( mainWindow === null ) {
    initialize();
  }
} );

// In this file you can include the rest of your app's specific main process code. You can also put them in separate files and
// require them here.
