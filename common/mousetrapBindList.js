// Currently works only with string declarations combos + separated

// * @param {string|Array} keys
// * @param {string} action
// * @returns void
// *  Mousetrap.prototype.unbind = function(keys, action) {

//  * @param {string|Array} keys
//  * @param {Function} callback
//  * @param {string=} action - 'keypress', 'keydown', or 'keyup'
//  * @returns void
// * Mousetrap.prototype.bind = function(keys, callback, action)

( function ( Mousetrap ) {
  const { compareKeyBindings } = require( './common/index' );
  if ( !Mousetrap )
    return;
  let binds = ( window.MousetrapBound = [] );

  const _originalBind = Mousetrap.prototype.bind;
  const _originalUnbind = Mousetrap.prototype.unbind;

  Mousetrap.prototype.bind   = function ( keys, callback, action ) {
    //add keys normalization
    let match = false;
    for ( let bind of binds ) {
      if ( compareKeyBindings( bind, keys ) ) {
        match = true;
        break;
      }
    }
    if ( !match ) {
      binds.push( keys );
      return _originalBind.call( this, keys, callback, action );
    } else
      return false;
  }
  ;

  Mousetrap.prototype.unbind = function ( keys, action ) {
    let match = false;
    for ( let bind of binds ) {
      if ( compareKeyBindings( bind, keys ) ) {
        match = true;
        break;
      }
    }
    if ( match ) {
      binds.splice( binds.indexOf( keys ) );
      console.log( 'removed ' + keys );
    }
    return _originalUnbind.call( this, keys, action );
  };

  Mousetrap.init();
} )(
  typeof Mousetrap !== 'undefined'
    ? Mousetrap
    : undefined
);
