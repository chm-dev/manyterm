const {allShortcuts} = require('../../../common/keyboard');
const {renderedPalette, updateCommands} = require('../../palette');
const pidCwd = require('pid-cwd');
const {remote, shell: electronShell} = require('electron');
const pty = remote.require('node-pty');
const {Terminal} = require('xterm');
const {FitAddon} = require('xterm-addon-fit');
const {WebLinksAddon} = require('xterm-addon-web-links');
const {WebglAddon} = require('xterm-addon-webgl');
const {LigaturesAddon} = require('xterm-addon-ligatures');
const {Unicode11Addon} = require('xterm-addon-unicode11');
const {generateSimpleID} = require('../../../common');
const {requireUncached} = require('../../../common');
const xtermConfig = requireUncached('../configs/config').xterm;

// TODO: consider dropping jnata dependency and use Golden Layout filter + vanilla js
const jnata  = require('jsonata'),
  termCount  = jnata('$count(**[componentName="xterm"])'),
  thisLocale = require('electron').remote.app.getLocale();

const ptySpawn = (sh, args, cwd = process.cwd(), env = process.env) => {
  return pty.spawn(sh, args, {
    name: 'xterm-256color',
    cols: 120,
    rows: 40,
    cwd : cwd,
    env : {
      //     LANG     : (thisLocale || '') + '.UTF-8',
      TERM     : 'xterm-256color',
      COLORTERM: 'truecolor',
      ...env
    }
  });
};

function create(container, componentState, callback = null) {
  if (callback != null && typeof callback != 'function') {
    throw new TypeError('callback needs to be a function');
  }
  /*
  xtermConfig -> general config taken from main xterm obj (config -> xterm)
  generalTerminalConfig -> general xterm opts,
  generalXtermTheme -> general theme holds two props    : opacity and theme
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
  // find applicable opacity and add it to bg if defined
  const thisOpacity = profileOpacity && profileOpacity > 0 && profileOpacity <= 255
    ? profileOpacity.toString(16)
    : generalXtermTheme.opacity && generalXtermTheme.opacity > 0 && generalXtermTheme.opacity <= 255
      ? generalXtermTheme.opacity
      : undefined;
  // put background color to separate const and make theme bg transparent this is to apply actual terminal background color to the
  // whole component container rether then xterm theme. looks and behaves much better
  let thisXtermBackground = thisXtermTheme.background.slice(0, 7);
  /*  FIXME: Statement below updates generalTheme background to 'tranparent' value for shells without theme declared
  if terminal  has no custom theme in config and uses general one (from xterm object)
 */
  thisXtermTheme.background = 'transparent';
  if (thisOpacity) {
    thisXtermBackground += thisOpacity.toString(16); //=
  }
  const thisXtermConfig = JSON.parse(JSON.stringify(generalTerminalConfig));
  thisXtermConfig.theme = JSON.parse(JSON.stringify(thisXtermTheme));

  const thisPTY    = ptySpawn(shell, shellArgs),
    thisXterm      = new Terminal(thisXtermConfig),
    fitAddon       = new FitAddon(),
    webglAddon     = new WebglAddon(),
    ligaturesAddon = new LigaturesAddon(),
    unicode11Addon = new Unicode11Addon(),
    thisSimpleID   = generateSimpleID(),
    thisContainer  = container.getElement().get(0); //  xterm will inject into this el

  thisContainer.id                    = thisSimpleID;
  thisContainer.style.backgroundColor = thisXtermBackground;
  debugger;
  let cwdTimer;
  let cwd;
  // FIXME: Investigate errors on terminal close  ;)
  const endSession = () => {
    if (typeof terminals[thisSimpleID] == 'object') {
      thisXterm.dispose();
      if (thisPTY) {
        thisPTY.destroy();
      }
    }
    delete terminals[thisSimpleID];
    console.log(container);
    if (container._mSubscriptions.destroy.length > 0) 
      container.off('destroy');
    };
  const closeContainer = () => {
    if (terminals[container._config.id]) 
      container.close();
    endSession();
  };

  // addons
  thisXterm.loadAddon(fitAddon);
  // LINKS ARE ALWAYS OPENED WITH DEFAULT EXTERNAL BROWSER
  thisXterm.loadAddon(new WebLinksAddon((ev, url) => {
    electronShell.openExternal(url);
  }));
  // passing bound shortcut key events to document root so can be handled
  thisXterm.attachCustomKeyEventHandler(function (ev) {
    if (ev.type !== 'keydown') {
      return true;
    }

    // construct string similar to mousetrap string bindings so we can check if pressed combo is a bound shortcut

    const pressed = ((
      ev.ctrlKey
        ? 'ctrl+'
        : ''
    ) + (
      ev.altKey
        ? 'alt+'
        : ''
    ) + (
      ev.shiftKey
        ? 'shift+'
        : ''
    ) + ev.key).toLowerCase().replace('arrow', '');

    let match = true;
    for (let shc of allShortcuts) {
      match = JSON.stringify(pressed.split('+').sort()) === JSON.stringify(shc.split('+').sort());

      if (match) {
        document.dispatchEvent(new ev.constructor(ev.type, ev));
        break;
      }
    }
    // if ( ev.repeat === false ) document.dispatchEvent( new ev.constructor( ev.type, ev ) ); }
    console.log('returning ' + !match);
    return !match;
  });

  // thisXterm.loadAddon(unicode11Addon); thisXterm.unicode.activeVersion = "11";

  thisXterm.onData(data => {
    thisPTY.write(data);
  });

  thisPTY.on('data', function (data) {
    // This bit allows to determine if cwd of a terminal has changed each GL terminal component has cwd prop with current location
    // NOTE: cwd = location of main process/shell. ie if you start zsh from bash cwd will remain at original bash location regardless
    // of zsh navigation actions

    // TODO: [FM postponed] emit global event and use it to sync with fm

    if (typeof cwdTimer != 'undefined') {
      clearTimeout(cwdTimer);
    }

    cwdTimer = setTimeout(async _ => {
      const newCwd = await pidCwd(thisPTY.pid);
      if (newCwd !== cwd) {
        cwd = newCwd;
        container.extendState({cwd: cwd});
      }
    }, 400);

    thisXterm.write(data);
    //console.log(data); console.log(tf8Array .from(data));
  });
  thisPTY.on('error', data => {
    thisXterm.write(data);
  });

  thisPTY.on('exit', (code, signal) => {
    console.log('CLOSING Container after pty exit if any left');
    closeContainer();
  });
  container.on('destroy', endSession);
  // This is "first drop"
  setTimeout(() => {
    thisXterm.open(thisContainer);
    thisXterm.loadAddon(ligaturesAddon);
    thisXterm.loadAddon(webglAddon);
    container.parent.addId(thisSimpleID);
    resizeAllTerminals();
  }, 100);
  // Structure of terminals global (will be prop of an object later on)::
  terminals[thisSimpleID] = {
    container : container,
    fitAddon  : fitAddon,
    webglAddon: webglAddon,
    xterm     : thisXterm,
    pty       : thisPTY
  };

  container.off('tab');
}

const getFocusedTerminalId = (activeEl = window.focusLaterElements[0] || document.activeElement) => {
  if (activeEl.tagName.toLowerCase() == 'body') {
    return false;
  }

  const thisContainer = activeEl.closest('.lm_item_container .lm_content');
  return thisContainer.id;
};

const resizeAllTerminals = _ => {
  if (mainLayout.toConfig().content[0].content && mainLayout.toConfig().content[0].content.length > 0 && termCount.evaluate(mainLayout.toConfig()) == Object.keys(terminals).length) {
    setTimeout(() => {
      for (const term in terminals) {
        const t = terminals[term];
        t.fitAddon.fit();
        t.pty.resize(t.xterm.cols, t.xterm.rows); // we have to resize pty after autofit calculates cols and rows
      }
    }, 50);
  }
};

module.exports = {
  create              : create,
  getFocusedTerminalId: getFocusedTerminalId,
  resizeAllTerminals  : resizeAllTerminals
};
