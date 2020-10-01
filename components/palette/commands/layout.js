const mousetrap = require( 'mousetrap' );

module.exports = {
  showNewTerminalMenu: {
    name       : 'New Terminal ...',
    description: '',
    shortcut   : 'ctrl+t',

    command    : () => {
      console.log( 'fired New Terminal command. if ', mainLayout.root.getItemsByType( 'component' ).length );
      if ( mainLayout.root.getItemsByType( 'component' ).length === 0 )
        return;
      const menu   = document.querySelector( '#newItemMenu' ),
        focusLater = document.activeElement;
      let boundKeys = [];

      const close = e => {
        //Don't close on ctrl+t,
        //TODO: it has to be dynamic from keyboard shortcuts
        if ( e.type === 'keydown' && e.key === 't' && e.altKey === false && e.ctrlKey === true && e.shiftKey === false && e.metaKey === false )
          return;
        menu.style.display = 'none';
        document.removeEventListener( 'click', close );
        document.removeEventListener( 'keydown', close );
        if ( focusLater !== document.activeElement )
          focusLater.focus();
      };

      const addItem = config => {
        console.log( config );
        const root = mainLayout.root;
        // http://golden-layout.com/examples/#2e5d0456964b59f9eec1ecb44e1d31eb
        if ( root.contentItems.length > 0 ) {
          root.contentItems[0].addChild( config );
        } else {
          root.addChild( config );
        }

        boundKeys.forEach( k => mousetrap.unbind( k ) );
        boundKeys = [];
      };



      if ( focusLater.tagName.toLowerCase() === 'textarea' )
        document.activeElement.blur();

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
  toggleRowColumn    : {
    name       : 'Layout orientation toggle',
    description: '',
    command    : () => {
      var oldElement = mainLayout.root.contentItems[0],
        newElement   = mainLayout.createContentItem( {
          type   : oldElement.isRow
            ? 'column'
            : 'row',
          content: []
        } ),
        i;
      //Prevent it from re-initialising any child items
      newElement.isInitialised = true;

      for ( i = 0; i < oldElement.contentItems.length; i++ ) {
        newElement.addChild( oldElement.contentItems[i] );
      }

      mainLayout.root.replaceChild( oldElement, newElement );
    }
  }
};
