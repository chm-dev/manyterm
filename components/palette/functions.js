const { resizeLeft, resizeRight } = require( "../../common/commands/resize" );

module.exports = [
  {
    key   : "resizeLeft",
    action: resizeLeft
  }, {
    key   : "resizeRight",
    action: resizeRight
  }
];