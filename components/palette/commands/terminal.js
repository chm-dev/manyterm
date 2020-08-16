// FIXME: WHAT IS GOING ON ??? const getFocusedTerminalId = require('../../xterm/includes');
//* FIXME: inadequate filename. Move to xterm component.

function getFocusedTerminalId(activeEl = window.focusLaterElements[0] || document.activeElement) {
  if (activeEl.tagName.toLowerCase() == 'body') 
    return false;
  
  const thisContainer = activeEl.closest('.lm_item_container .lm_content');
  return thisContainer.id;
}

/**
 * @param  {bool} isResizeLeft - true for left, false for right
 */
function resizeH(isResizeLeft, activeEl = window.focusLaterElements[0] || document.activeElement) {
//TODO: move this to config

  let resizeStep = 10; //percent of width
  let leftEdge;
  const thisId = typeof activeEl === 'string'
    ? activeEl
    : getFocusedTerminalId();

  if (typeof activeEl != 'string' && (activeEl.tagName.toLowerCase() == 'body' || !getFocusedTerminalId())) 
    throw 'no component in focus';
  
// thisId = thisContainer.id;

  const thisContainer = terminals[thisId].container;
  const thisContainerEl = thisContainer.getElement().get(0);

  if (mainLayout.container.get(0).offsetWidth - thisContainer.offsetWidth <= 10) 
    return false;
  leftEdge = thisContainerEl.offsetLeft >= mainLayout.container.get(0).offsetWidth - thisContainerEl.offsetWidth
    ? false
    : true;

  if (!leftEdge) 
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

function traverse(next, activeEl = document.activeElement) {
  const thisId = getFocusedTerminalId(activeEl);
  const termKeys = Object.keys(terminals);
// console.log( termKeys );

  terminals[
    !thisId || termKeys.indexOf(thisId) >= termKeys.length - 1
      ? termKeys[0]
      : termKeys[termKeys.indexOf(thisId) + (
          next
            ? 1
            : -1
        )]
  ].xterm.focus();
}
module.exports = {
  resizeLeft : activeEl => resizeH(true, activeEl),
  resizeRight: activeEl => resizeH(false, activeEl),
  traverseFwd: activeEl => traverse(true, activeEl),
  traverseBck: activeEl => traverse(false, activeEl)
};
