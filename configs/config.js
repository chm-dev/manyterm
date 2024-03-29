/** @format */

// TODO: replace it with strings and retrieve afterwards
const xth = require( 'xterm-theme' );

module.exports = {
  devTools: false,
  xterm   : {
    theme   : {
      opacity: 200,
      theme  : xth.Brogrammer
    },
    terminal: {
      //fontFamily: 'CaskaydiaCove Nerd Font Mono',
      fontFamily                : 'Consolas NF, FiraMono NF, Hasklug NF',
      fontSize                  : 15,
      fontWeight                : 100,
      windowsMode               : true,
      cols                      : 80,
      drawBoldTextInBrightColors: false,
      fontWeightBold            : 300,
      allowTransparency         : true,
      screenReaderMode          : false
      //minimumContrastRRatio     : 7
    },
    profiles: [
      {
        name   : 'nushell',
        shell  : 'nu.exe',
        theme  : xth['Brogrammer'],
        opacity: 245 //= 0 - 255
      }, {
        theme    : xth.PencilDark,
        name     : 'cmder',
        shell    : 'cmd.exe',
        shellArgs: ['/k', 'C:/Utils/cmder/vendor/init.bat', '/f']
      }, {
        name     : 'cmder&buildTools',
        shell    : 'cmd.exe',
        shellArgs: ['/k', 'C:/Utils/cmder/vendor/init.bat', '/f', '&&', 'C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/Build/vcvars64.bat']
      }, {
        name     : 'msys2',
        shell    : 'D:/msys64/usr/bin/zsh.exe',
        shellArgs: ['-i'],
        env      : Object.assign( this, process.env, { HOME: '/home/chm' } ),
        theme    : xth.PencilDark,
        opacity  : 200
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
