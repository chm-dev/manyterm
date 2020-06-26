/** @format */

const xth = require( 'xterm-theme' ); // TODO: replace it with strings and retrieve afterwards !!!

module.exports = {
  xterm: {
    theme   : {
      opacity: 200,
      theme  : xth.Cobalt2
    },
    terminal: {
      fontFamily                : 'Consolas NF',
      fontSize                  : 15,
      fontWeight                : 'normal',
      windowsMode               : true,
      cols                      : 80,
      drawBoldTextInBrightColors: true,
      fontWeightBold            : 'normal',
      allowTransparency         : true
    },
    profiles: [
      {
        name   : 'nushell',
        shell  : 'C:/Utils/SHELL/nushell_0_15_0/nu.exe',
        theme  : xth.Github,
        opacity: 192 //= 0 - 255
      }, {
        name : 'elvish',
        shell: 'C:/Utils/SHELL/elvish.exe'
      }, {
        name     : 'cygwin',
        shell    : 'D:/cygwin64/bin/zsh.exe',
        shellArgs: ['-i']
      }, {
        name     : 'msys2',
        shell    : 'D:/msys64/usr/bin/zsh.exe',
        shellArgs: ['-i'],
        env      : Object.assign( this, process.env, { HOME: '/home/chm' } )
      }, {
        name     : 'cmder',
        shell    : 'cmd.exe',
        shellArgs: ['/k', 'C:/Utils/cmder/vendor/init.bat', '/f']
      }, {
        name     : 'cmder&buildTools',
        shell    : 'cmd.exe',
        shellArgs: ['/k', 'C:/Utils/cmder/vendor/init.bat', '/f', '&&', 'C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/Build/vcvars64.bat']
      }
    ]
  }
};

/* Available themes:
==================

3024_Night
AdventureTime
Afterglow
AlienBlood
Argonaut
Arthur
 * AtelierSulphurpool
Atom
Batman
Belafonte_Night
BirdsOfParadise
Blazer
Borland
Bright_Lights
Broadcast
Brogrammer
C64
 * Chalk
Chalkboard
Ciapre
Cobalt2
Cobalt_Neon
CrayonPonyFish
Dark_Pastel
Darkside
Desert
DimmedMonokai
DotGov
Dracula
 * Duotone_Dark
ENCOM
Earthsong
Elemental
Elementary
Espresso
Espresso_Libre
Fideloper
FirefoxDev
Firewatch
FishTank
 * Flat
Flatland
Floraverse
ForestBlue
FrontEndDelight
FunForrest
Galaxy
Github
Glacier
Grape
Grass
Gruvbox_Dark
 * Hardcore
Harper
Highway
Hipster_Green
Homebrew
Hurtado
Hybrid
IC_Green_PPL
IC_Orange_PPL
IR_Black
Jackie_Brown
 * Japanesque
Jellybeans
JetBrains_Darcula
Kibble
Later_This_Evening
Lavandula
LiquidCarbon
LiquidCarbonTransparent
 * LiquidCarbonTransparentInverse
Man_Page
Material
MaterialDark
Mathias
Medallion
Misterioso
Molokai
MonaLisa
 * Monokai_Soda
Monokai_Vivid
N0tch2k
Neopolitan
Neutron
NightLion_v1
NightLion_v2
Novel
Obsidian
Ocean
OceanicMaterial
 * Ollie
OneHalfDark
OneHalfLight
Pandora
Paraiso_Dark
Parasio_Dark
PaulMillr
PencilDark
PencilLight
Piatto_Light
Pnevma
 * Pro
Red_Alert
Red_Sands
Rippedcasts
Royal
Ryuuko
SeaShells
Seafoam_Pastel
Seti
Shaman
Slate
Smyck
SoftServer
 * Solarized_Darcula
Solarized_Dark
Solarized_Dark_Higher_Contrast
Solarized_Dark_Patched
Solarized_Light
SpaceGray
 * SpaceGray_Eighties
SpaceGray_Eighties_Dull
Spacedust
Spiderman
Spring
Square
Sundried
Symfonic
Teerb
Terminal_Basic
 * Thayer_Bright
The_Hulk
Tomorrow
Tomorrow_Night
Tomorrow_Night_Blue
Tomorrow_Night_Bright
Tomorrow_Night_Eighties
 * ToyChest
Treehouse
Ubuntu
UnderTheSea
Urple
Vaughn
VibrantInk
Violet_Dark
Violet_Light
WarmNeon
Wez
WildCherry
Wombat
 * Wryan
Zenburn
ayu
deep
idleToes
 */
