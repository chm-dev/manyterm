//TODO: Remove terminal.js and rename this to terminal.js

// FIXME: Investigate: function from module does not work - currently doubled inline below comment
// const getFocusedTerminalId = require('../../xterm/includes');
function getFocusedTerminalId ( activeEl = window.focusLaterElements[ 0 ] || document.activeElement ) {
  if ( activeEl.tagName.toLowerCase() == 'body' )
    return false;

  const thisContainer = activeEl.closest( '.lm_item_container .lm_content' );
  return thisContainer.id;
}

/**
 * @param  {bool} isResizeLeft - true for left, false for right
 */
function resizeH ( isResizeLeft, activeEl = window.focusLaterElements[ 0 ] || document.activeElement ) {
  //TODO: move  below  to config
  let resizeStep = 10; //percent of width
  let leftEdge;
  const thisId = typeof activeEl === 'string' ?
    activeEl :
    getFocusedTerminalId();

  if ( typeof activeEl != 'string' && ( activeEl.tagName.toLowerCase() == 'body' || !getFocusedTerminalId() ) )
    throw 'no component in focus';

  // thisId = thisContainer.id;

  const thisContainer = terminals[ thisId ].container;
  const thisContainerEl = thisContainer.getElement().get( 0 );

  if ( mainLayout.container.get( 0 ).offsetWidth - thisContainer.offsetWidth <= 10 )
    return false;
  leftEdge = thisContainerEl.offsetLeft >= mainLayout.container.get( 0 ).offsetWidth - thisContainerEl.offsetWidth ?
    false :
    true;

  if ( !leftEdge )
    resizeStep = 0 - resizeStep;

  const columnToResize = thisContainer.parent.parent.parent.isRow ?
    thisContainer.parent.parent :
    thisContainer.parent.parent.parent;
  const currentWidth = columnToResize.config.width;

  columnToResize.config.width = isResizeLeft ?
    currentWidth - resizeStep :
    currentWidth + resizeStep;

  mainLayout.updateSize();
  // console.log( thisComponent ); console.log( leftEdge );
}

/**
 * @param  {bool} next - false = previous
 *
 */

function traverse ( next, activeEl = document.activeElement ) {
  const thisId = getFocusedTerminalId( activeEl );
  const termKeys = Object.keys( terminals );
  // console.log( termKeys );
  //FIXME: Traverse back fails on last
  terminals[
    !thisId || termKeys.indexOf( thisId ) >= termKeys.length - 1 ?
      termKeys[ 0 ] :
      termKeys[ termKeys.indexOf( thisId ) + (
        next ?
          1 :
          -1
      ) ]
  ].xterm.focus();
}
module.exports = {
  resizeLeft: {
    name: 'Resize active component to the left',
    description: '',
    shortcut: 'alt+shift+left',
    command: activeEl => resizeH( true, activeEl )
  },
  resizeRight: {
    name: 'Resize active component to the right',
    description: '',
    shortcut: 'alt+shift+right',
    command: activeEl => resizeH( false, activeEl )
  },
  traverseFwd: {
    name: 'Focus next terminal',
    description: '',
    shortcut: 'ctrl+tab',
    command: activeEl => traverse( true, activeEl )
  },
  traverseBck: {
    name: 'Focus previous terminal',
    description: '',
    shortcut: 'ctrl+shift+tab',
    command: activeEl => traverse( false, activeEl )
  }
};
