const loader = require( 'monaco-loader' );

let editorCreated = false;

mainLayout.registerComponent( 'monaco', function( container, componentState ) {
  const el = container.getElement().get( 0 );
  container.on( 'tab', _ => {
    if ( editorCreated == false ) {
      loader().then( monaco => {
        let editor = monaco.editor.create( el, {
          language: 'javascript',
          theme: 'vs-dark',
          automaticLayout: true
        } );
      } );
    }
  } );
} );

addMenuItem( 'editor', 'monaco', {} );
