/** @format */
// KeyboardJS is global .. ugly but really i refuse to convert it from es module
// to common at this point
const palette = require( "../components/palette" );
const { resizeLeft, resizeRight, traverseFwd, traverseBck } = require(
  "./commands/resize"
);

keyboardJS.bind( "alt + f1", e =>
{
  palette.show();
} );

keyboardJS.bind( "alt + f2", e =>
{
  palette.hide();
} );

keyboardJS.bind(
  "ctrl + tab",
  e => !e.shifKey
    ? traverseFwd()
    : traverseBck()
);

keyboardJS.bind( "alt + left", e =>
{
  if ( e.shiftKey == true )
    resizeLeft();
  console.log( "resize left" );
} );
keyboardJS.bind( "alt + right", e =>
{
  if ( e.shiftKey == true )
    resizeRight();
  console.log( "resize right" );
} );
