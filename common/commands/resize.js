//FIXME: inadequate filename. Move to xterm component.

const { getFocusedTerminalId } = require( "../../components/xterm/includes" );

/**
 * @param  {bool} resizeLeft - true for left, false for right
 */
function resizeH ( resizeLeft )
{
//TODO: move this to config
  let resizeStep = 20;
  let leftEdge;

  var activeEl = document.activeElement;
  if ( activeEl.tagName.toLowerCase() == "body" || !getFocusedTerminalId() )
    throw "no component in focus";

  // thisId = thisContainer.id;
  const thisId = getFocusedTerminalId();
  console.log( thisId );
  const thisContainer = terminals[thisId].container; // activeEl.closest( ".lm_item_container .lm_content" );
  // var thisStack = activeEl.closest('.lm_stack');
  /* var thisRow = activeEl.closest( ".lm_row" );
  var components = thisRow.querySelectorAll( ".lm_item_container" );
  console.log( components );
  console.log(
  [...components].indexOf( thisContainer )/** [...components] allows to use indexOf on NodeListArray
  );
  */
  // get containing stack
  if ( mainLayout.container.get( 0 ).offsetWidth - thisContainer.offsetWidth <= 10 )
    console.log( "return here" );
  leftEdge = thisContainer.offsetLeft >= mainLayout.container.get( 0 ).offsetWidth - thisContainer.offsetWidth
    ? false
    : true;

  var thisComponent = terminals[thisId].container;
  var thisComponentEl = thisComponent.getElement().get( 0 );
  var {
    offsetWidth : currentWidth,
    offsetHeight: currentHeight
  } = thisComponentEl;
  console.log( currentWidth, currentHeight );

  if ( !leftEdge )
    resizeStep = 0 - resizeStep;
  thisComponent.setSize(
    resizeLeft
      ? currentWidth - resizeStep
      : currentWidth + resizeStep,
    currentHeight
  );

  console.log( thisContainer );
  console.log( leftEdge );
}

/**
 * @param  {bool} next - false = previous
 *
 */

function traverse ( next )
{
  const thisId = getFocusedTerminalId();
  const termKeys = Object.keys( terminals );
  console.log( termKeys );

  terminals[
    !thisId || termKeys.indexOf( thisId ) >= termKeys.length - 1
      ? termKeys[0]
      : termKeys[termKeys.indexOf( thisId ) + (
        next
          ? 1
          : -1
      )]
  ].xterm.focus();
}

module.exports = {
  resizeLeft : () => resizeH( true ),
  resizeRight: () => resizeH( false ),
  traverseFwd: () => traverse( true ),
  traverseBck: () => traverse( false )
};
