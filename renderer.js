/** @format */

const config = require('./configs/config');
const GoldenLayout = require('golden-layout');
let mainLayout;

const addMenuItem = (title, componentName, state = '') => {
  const element = $('<li>' + title + '</li>');
  $('#menuContainer ul').append(element);
  const newItemConfig = {
    title         : title,
    type          : 'component',
    componentName : componentName,
    componentState: state
  };

  mainLayout.createDragSource(element, newItemConfig);
};

document.addEventListener('DOMContentLoaded', async ev => {
  mainLayout = new GoldenLayout(require('./configs/mainLayout'), document.querySelector('#mainLayout'));
  require('./components/xterm');
  require('./components/monaco');
  require('./components/filemanager');
  const palette = require('./components/palette');
  require('./common/keyboard');
  window.addEventListener('load', e => {
    mainLayout.init();
  });
});
