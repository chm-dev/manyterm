/** @format */

const CmdPalette = require( "electron-command-palette" );
const functions = require( "./functions" );
let palette = new CmdPalette();
const cmds = require( "./commands.json" );

//JSON style
palette.add( cmds );

//inline style
/* palette.add(
  { title: 'New project', category: 'Project', description: 'Create a new project from scratch', shortcut: 'CmdOrCtrl+Shift+N', action: 'newproject' }
);
 */
//Module style
palette.register( functions );

//Inline style
palette.register( "saveproject", function ()
{
  Project.save();
} );
palette.toggl;
module.exports = {
  show: _ => palette.show(),
  hide: _ => palette.hide()
};
