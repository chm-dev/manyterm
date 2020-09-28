const store = require('electron-store');

module.exports = {
  generateSimpleID: _ => {
    return Date.now();
  },
  transformHwnd   : buf => {
    return buf.toString('hex').replace(/([\da-f]{2})([\da-f]{2})([\da-f]{2}).*/i, '$3$2$1');
  },
  requireUncached : module => {
    delete require.cache[require.resolve(module)];
    return require(module);
  },
  bounds          : store => store.has('bounds')
    ? store.get('bounds')
    : {
      width : 1920,
      height: 540,
      x     : 0,
      y     : 0
    }
};
