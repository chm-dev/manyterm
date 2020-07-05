//FIXME: inadequate filename. Move to xterm component.

const { getFocusedTerminalId } = require( "../../components/xterm/includes" );

/**
 * @param  {bool} isResizeLeft - true for left, false for right
 */
function resizeH ( isResizeLeft )
{
//TODO: move this to config
  let resizeStep = 5; //percent of width
  let leftEdge;

  var activeEl = document.activeElement;
  if ( activeEl.tagName.toLowerCase() == "body" || !getFocusedTerminalId() )
    throw "no component in focus";

  // thisId = thisContainer.id;
  const thisId = getFocusedTerminalId();

  const thisContainer = terminals[thisId].container;
  const thisContainerEl = thisContainer.getElement().get( 0 );

  if ( mainLayout.container.get( 0 ).offsetWidth - thisContainer.offsetWidth <= 10 )
    return false;
  leftEdge = thisContainerEl.offsetLeft >= mainLayout.container.get( 0 ).offsetWidth - thisContainerEl.offsetWidth
    ? false
    : true;

  if ( !leftEdge )
    resizeStep = 0 - resizeStep;

  const columnToResize = thisContainer.parent.parent.parent.isRow
    ? thisContainer.parent.parent
    : thisContainer.parent.parent.parent;
  const currentWidth = columnToResize.config.width;

  columnToResize.config.width = isResizeLeft
    ? currentWidth - resizeStep
    : currentWidth + resizeStep;

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
