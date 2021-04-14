const store = require( 'electron-store' );

const normaliseKeyBinding = keys => {
  return typeof keys === 'string'
    ? JSON.stringify( keys.split( '+' ).sort() )
    : false;
};
module.exports = {
  generateSimpleID    : _ => {
    return Date.now();
  },
  transformHwnd       : buf => {
    return buf.toString( 'hex' ).replace( /([\da-f]{2})([\da-f]{2})([\da-f]{2}).*/i, '$3$2$1' );
  },
  requireUncached     : module => {
    delete require.cache[require.resolve( module )];
    return require( module );
  },
  bounds              : store => store.has( 'bounds' )
    ? store.get( 'bounds' )
    : {
      width : 1920,
      height: 540,
      x     : 0,
      y     : 0
    },
  getFocusedTerminalId: ( activeEl = window.focusLaterElements[0] || document.activeElement ) => {
    return activeEl.tagName.toLowerCase() == 'body'
      ? false
      : activeEl.closest( '.lm_item_container .lm_content' ).id;
  },
  normaliseKeyBinding : normaliseKeyBinding,
  compareKeyBindings  : ( keys1, keys2 ) => {
    return normaliseKeyBinding( keys1 ) === normaliseKeyBinding( keys2 );
  }
};
