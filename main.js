/** @format */

const {devTools} = require('./configs/config');

const path = require("path");
const {spawn, fork} = require("child_process");

const electron = require("electron");
require("v8-compile-cache");

const {transformHwnd} = require("./common");

require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron")
});
// Module to control application life.
const app = electron.app;
app.allowRendererProcessReuse = true;
// Module to create native browser window.
app.commandLine.appendSwitch("disable-smooth-scrolling"); // Turn off the sluggish scrolling.
app.commandLine.appendSwitch("high-dpi-support", "true");
// app.commandLine.appendSwitch( "disable-color-correct-rendering" );
const BrowserWindow = electron.BrowserWindow;
const url = require("url");

// Keep a global reference of the window object, if you don't, the window will be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const isWindows = process.platform === "win32";
const isLinux = process.platform === "linux";
const isDarwin = process.platform === "darwin";

function initialize() {
// Create the browser window.
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width         : 1920,
    height        : 540,
    x             : 0,
    y             : 0,
    frame         : false,
    transparent   : true
  });


  BrowserWindow.addDevToolsExtension('./debug/devtools-react')


  mainWindow.on("browser-window-created", ev => {
    console.log(mainWindow.getNativeWindowHandle());
  });

// and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file:",
    slashes : true
  }));

  if (isWindows) {
    spawn("./libs/win32/SetWindowCompositionAttribute.exe", [
      "hwnd",
      transformHwnd(mainWindow.getNativeWindowHandle()),
      "accent",
      "3",
      "1",
      "00000000",
      "0"
    ]);
    spawn("./assets/slide/slide.exe");
  }
/*TODO: think of more elegant solution ;) */
//*fork("./components/filemanager/server.js");

//* Open the DevTools. mainWindow.webContents.openDevTools() Emitted when the window is closed.

  mainWindow.on("closed", function() {
// Dereference the window object, usually you would store windows in an array if your app supports multi windows, this is the time when you should delete the
// corresponding element.
    mainWindow = null;
  });
  if (devTools) 
    mainWindow.openDevTools();
  }

// This method will be called when Electron has finished initialization and is ready to create browser windows. Some APIs can only be used after this event
// occurs.
app.on("ready", _ => {
  initialize();
});

// Quit when all windows are closed.
app.on("window-all-closed", function() {
// On OS X it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
// On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    initialize();
  }
});

// In this file you can include the rest of your app's specific main process code. You can also put them in separate files and require them here.
