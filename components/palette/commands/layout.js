const { getFocusedTerminalId } = require( '../../../common' );

module.exports = {
  showNewTerminalMenu: {
    name       : 'New Terminal ...',
    description: '',
    shortcut   : 'ctrl+t',
    command    : () => {
      if ( mainLayout.root.getItemsByType( 'component' ).length === 0 )
        return;
      const menu   = document.querySelector( '#newItemMenu' ),
        focusLater = document.activeElement;
      let thisBindings = [];

      const close = e => {
        menu.style.display = 'none';
        document.removeEventListener( 'click', close );
        thisBindings.forEach( k => Mousetrap.unbind( k ) );
        thisBindings = [];
        //TODO: focus should be put on new terminal if one was created in effect of keydown event
        if ( focusLater !== document.activeElement )
          focusLater.focus();
      };
      const addItem = ev => {
        const root = mainLayout.root;
        configIndex = parseInt( ev.key );
        // http://golden-layout.com/examples/#2e5d0456964b59f9eec1ecb44e1d31eb
        if ( root.contentItems.length > 0 && configIndex && configIndex > 0 && configIndex - 1 <= componentConfigs.length ) {
          const config = componentConfigs[configIndex];
          root.contentItems[0].addChild( config );
        } else {
          root.addChild( config );
        }
      };

      if ( focusLater.tagName.toLowerCase() === 'textarea' && getFocusedTerminalId() )
        terminals[getFocusedTerminalId()].xterm.blur();

      menu.style.display = 'block';
      document.addEventListener( 'click', close );
      mainLayout.on( 'componentCreated', close );
      Mousetrap.bind( 'esc', close );
      thisBindings.push( 'esc' );
      if ( componentConfigs.length > 0 ) {
        componentConfigs.forEach( ( config, i ) => {
          Mousetrap.bind( ( i + 1 ).toString(), ev => {
            console.log( config.title + ' will be added' );
            addItem( ev );
          } );
          thisBindings.push( ( i + 1 ).toString() );
        } );
      }
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
