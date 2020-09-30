const mousetrap = require( 'mousetrap' );

module.exports = {
  showNewTerminalMenu: {
    name: 'New Terminal ...',
    description: '',
    shortcut: 'ctrl+t',

    command: () => {
      const menu = document.querySelector( '#newItemMenu' );
      let boundKeys = [];

      const close = e => {

        menu.style.display = 'none';
        document.removeEventListener( 'click', close );
        document.removeEventListener( 'keydown', close );

      };

      const addItem = config => {
        console.log( config );
        const root = mainLayout.root;
        // http://golden-layout.com/examples/#2e5d0456964b59f9eec1ecb44e1d31eb
        if ( root.contentItems.length > 0 ) {

          // if ( !root.contentItems[ 0 ].isRow ) {

          //   const oldElement = root.contentItems[ 0 ];
          //   const newElement = mainLayout.createContentItem( {
          //     type: 'row',
          //     content: [ {
          //       type: 'stack',
          //       content: [
          //            config
          //       ]
          //     }, {
          //       type: 'column',
          //       content: [ oldElement ]
          //     } ]
          //   } );
          //   root.replaceChild( oldElement, newElement );
          // } else {
          root.contentItems[ 0 ].addChild( config );

        } else {

          root.addChild( config );

        }

        boundKeys.forEach( k => mousetrap.unbind( k ) );
        boundKeys = [];
      };

      menu.style.display = 'block';
      document.addEventListener( 'click', close );
      document.addEventListener( 'keydown', close );
      mainLayout.on( 'componentCreated', close );

      if ( componentConfigs.length > 0 )
        componentConfigs.forEach( ( config, i ) => {
          mousetrap.bind( ( i + 1 ).toString(), () => addItem( config ) );
          boundKeys.push( ( i + 1 ).toString() );
        } );

    }
  },
  toggleRowColumn: {
    name: 'Layout orientation toggle',
    description: '',
    command: () => {
      var oldElement = mainLayout.root.contentItems[ 0 ],
        newElement = mainLayout.createContentItem( {
          type: oldElement.isRow ?
            'column' : 'row',
          content: []
        } ),
        i;
      //Prevent it from re-initialising any child items
      newElement.isInitialised = true;

      for ( i = 0; i < oldElement.contentItems.length; i++ ) {
        newElement.addChild( oldElement.contentItems[ i ] );
      }

      mainLayout.root.replaceChild( oldElement, newElement );
    }
  }
};
