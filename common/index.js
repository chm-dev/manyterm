/** @format */

module.exports = {
  generateSimpleID: _ => {
    return Date.now();
  },
  transformHwnd   : buf => {
    return buf.toString( 'hex' ).replace( /([\da-f]{2})([\da-f]{2})([\da-f]{2}).*/i, '$3$2$1' );
  },
  requireUncached : module => {
    delete require.cache[require.resolve( module )];
    return require( module );
  }
};
