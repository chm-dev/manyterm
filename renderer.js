const React = require( 'react' );
const ReactDOM = require( 'react-dom' );
const config = require( './configs/config' );

const GoldenLayout = require( 'golden-layout' );
let mainLayout;

//* TODO: ADD LET SO IT IS NOT A GLOBAL ON PROD
//* terminals object holds all components and its all info. It is global for dev
const terminals = {};
const componentConfigs = [];
const addMenuItem = ( title, componentName, state = '', type = 'component' ) => {
  const element = $( '<li>' + title + '</li>' );
  $( '#newItemMenu ul' ).append( element );
  const newItemConfig = {
    title: title,
    type: type,
    componentName: componentName,
    componentState: state,
    component: type = 'react-component' ?
      componentName : undefined
  };

  mainLayout.createDragSource( element, newItemConfig );
  componentConfigs.push( newItemConfig )
};

document.addEventListener( 'DOMContentLoaded', async ev => {
  require( './common/inactiveStateStyle' );
  mainLayout = new GoldenLayout( require( './configs/mainLayout' ), document.querySelector( '#mainLayout' ) );
  require( './components/xterm' );
  require( './components/monaco' );
  require( './components/palette' );
  require( './components/filemanager' );
  require( './common/keyboard' );
  window.addEventListener( 'load', e => {
    mainLayout.init();

    // mainLayout.on('stateChanged', ev => console.log(ev)); mainLayout.on('selectionChanged', ev => console.log(ev));
    mainLayout.on( 'stackCreated', ev => {
      if ( ev.parent.isStack === true )
        ev.parent.on( 'activeContentItemChanged', e => {
          console.log( 'active changed', e );
        } );
    } );
  } );
} );
