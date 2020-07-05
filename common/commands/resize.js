//FIXME: inadequate filename. Move to xterm component.

const { getFocusedTerminalId } = require( "../../components/xterm/includes" );

/**
 * @param  {bool} isResizeLeft - true for left, false for right
 */
function resizeH ( isResizeLeft )
{
//TODO: move this to config
  let resizeStep = 5;
  let leftEdge;

  var activeEl = document.activeElement;
  if ( activeEl.tagName.toLowerCase() == "body" || !getFocusedTerminalId() )
    throw "no component in focus";

  // thisId = thisContainer.id;
  const thisId = getFocusedTerminalId();

  const thisContainer = terminals[thisId].container;
  const thisContainerEl = thisContainer.getElement().get( 0 );
  // var thisStack = activeEl.closest('.lm_stack');
  /* var thisRow = activeEl.closest( ".lm_row" );
  var components = thisRow.querySelectorAll( ".lm_item_container" );
  // console.log( components );
  // console.log(
  [...components].indexOf( thisContainer )/** [...components] allows to use indexOf on NodeListArray
  );
  */
  // get containing stack
  if ( mainLayout.container.get( 0 ).offsetWidth - thisContainer.offsetWidth <= 10 )
    console.log( "return here" );
  leftEdge = thisContainer.offsetLeft >= mainLayout.container.get( 0 ).offsetWidth - thisContainer.offsetWidth
    ? false
    : true;

  var {
    width : currentWidth,
    height: currentHeight
  } = thisComponent;
  //console.log( currentWidth, currentHeight );

  if ( !leftEdge )
    resizeStep = 0 - resizeStep;

  /*
    thisComponent.setSize(
      isResizeLeft
        ? currentWidth - resizeStep
        : currentWidth + resizeStep,
      currentHeight
    );
   */
  let stackWidth = thisComponent.parent.parent.parent.config.width;
  thisComponent.parent.parent.config.width = isResizeLeft
    ? stackWidth - resizeStep
    : stackWidth + resizeStep;
  mainLayout.updateSize();
// console.log( thisComponent ); console.log( leftEdge );
}

/**
 * @param  {bool} next - false = previous
 *
 */

function traverse ( next )
{
  const thisId = getFocusedTerminalId();
  const termKeys = Object.keys( terminals );
  // console.log( termKeys );

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
