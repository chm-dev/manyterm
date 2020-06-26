const pidCwd = require('pid-cwd');
const {remote, shell: electronShell} = require('electron');
const xtermConfig = require('../../../configs/config').xterm;
const pty = remote.require('node-pty');
const {Terminal} = require('xterm');
const {FitAddon} = require('xterm-addon-fit');
const {WebLinksAddon} = require('xterm-addon-web-links');
const {generateSimpleID} = require('../../../common');

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
    console.log(`creating`);

    if (callback != null && typeof callback != 'function') {
        throw new TypeError('callback needs to be a function');
    }
    const {shell, shellArgs} = componentState;
    const el = container.getElement().get(0); // inject terminal into this element
    const thisPTY = ptySpawn(shell, shellArgs);
    const thisXterm = new Terminal(xtermConfig.terminal);
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
