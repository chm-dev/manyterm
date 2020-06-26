/** @format */

const pidCwd = require('pid-cwd');
const {remote, shell: electronShell} = require('electron');
const pty = remote.require('node-pty');

const {Terminal} = require('xterm');
const {FitAddon} = require('xterm-addon-fit');
const {WebLinksAddon} = require('xterm-addon-web-links');
const {generateSimpleID} = require('../../../common');

const {requireUncached} = require('../../../common');
const xtermConfig = requireUncached('../configs/config').xterm;

const ptySpawn = (sh, args, cwd = process.cwd(), env = process.env) => {
  return pty.spawn(sh, args, {
    name: 'xterm-color',
    cols: 120,
    rows: 40,
    cwd : cwd,
    env : env
  });
};

function create(container, componentState, callback = null) {
  if (callback != null && typeof callback != 'function') {
    throw new TypeError('callback needs to be a function');
  }
  /*
   xtermConfig -> general config taken from main xterm obj (config -> xterm)
   generalTerminalConfig -> general xterm opts,
   generalXtermTheme -> general theme holds two props: opacity and theme
   thisXtermConfig, thisXtermTheme ->  final settings
  */

  // get the config within a function so it remains unmutable split general settings to xterm general and theme opts
  const {terminal: generalTerminalConfig, theme: generalXtermTheme} = xtermConfig;

  // same for profile specific settings, retrieved from componentState
  const {shell, shellArgs, theme: profileTheme, opacity: profileOpacity} = componentState;

  // get final theme (depending on profile theme)
  let thisXtermTheme = profileTheme && profileTheme.background
    ? profileTheme
    : generalXtermTheme.theme
      ? generalXtermTheme.theme
      : undefined;

  //add opacity to bg if defined

  const thisOpacity = profileOpacity && profileOpacity > 0 && profileOpacity <= 255
    ? profileOpacity.toString(16)
    : generalXtermTheme.opacity && generalXtermTheme.opacity > 0 && generalXtermTheme.opacity <= 255
      ? generalXtermTheme.opacity
      : undefined;

  if (thisOpacity) {
    thisXtermTheme.background = thisXtermTheme.background.slice(0, 7); //=
    thisXtermTheme.background += thisOpacity.toString(16); //=
  }

  const thisXtermConfig = JSON.parse(JSON.stringify(generalTerminalConfig));
  thisXtermConfig.theme = JSON.parse(JSON.stringify(thisXtermTheme));

  console.log(thisXtermConfig); //=

  const el = container.getElement().get(0); // inject terminal into this element
  const thisPTY = ptySpawn(shell, shellArgs);

  const thisXterm = new Terminal(thisXtermConfig);
  const fitAddon = new FitAddon();
  const thisSimpleID = generateSimpleID();
  let cwdTimer;
  let cwd;

  const closeThis = _ => {
    if (typeof terminals[thisSimpleID] == 'object') {
      delete terminals[thisSimpleID];
      thisPTY.destroy();
      thisXterm.dispose();
    }
  };

  thisXterm.loadAddon(fitAddon);
  // LINKS ARE ALWAYS OPENED WITH DEFAULT EXTERNAL BROWSER
  thisXterm.loadAddon(new WebLinksAddon((mev, url) => {
    electronShell.openExternal(url);
  }));

  thisXterm.onData(data => {
    thisPTY.write(data);
  });

  thisPTY.on('data', function(data) {
    if (typeof cwdTimer != 'undefined') 
      clearTimeout(cwdTimer);
    cwdTimer = setTimeout(async _ => {
      const newCwd = await pidCwd(thisPTY.pid);
      if (newCwd !== cwd) {
        cwd = newCwd;
        container.extendState({cwd: cwd});
      }
    }, 400);
    thisXterm.write(data);
  });
  thisPTY.on('error', data => {
    thisXterm.write(data);
  });

  thisPTY.on('exit', (code, signal) => {
    closeThis();
  });

  container.on('destroy', closeThis);
  container.parent.on('stateChanged', (i, j) => console.log(i, j));

  //FIXME: PLEASE  add event 'first drop' to layout manager;)
  setTimeout(() => {
    thisXterm.open(el);
  }, 100);
  // Structure of terminals global (will be prop of an object later on)::
  terminals[thisSimpleID] = {
    container: container,
    fitAddon : fitAddon,
    xterm    : thisXterm,
    pty      : thisPTY
  };

  container.off('tab');
}
module.exports = {
  create: create
};
