/** @format */
// KeyboardJS is global .. ugly but really i refuse to convert it from es module to common at this point
const palette = require( '../components/palette' );

keyboardJS.bind( 'f1', e => {
  palette.show();
} );

keyboardJS.bind( 'f2', e => {
  palette.hide();
} );