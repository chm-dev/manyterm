module.exports = {
    xterm: {
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
                name : 'nushell',
                shell: 'C:/Utils/SHELL/nushell_0_15_0/nu.exe'
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
