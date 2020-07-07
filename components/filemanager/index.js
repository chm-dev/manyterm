const React = require('react');
const ReactDOM = require('react-dom');

const htm = require('htm');
const html = htm.bind(React.createElement)

const {FileManager, FileNavigator} = require('@opuscapita/react-filemanager');
const {default: connectorNodeV1} = require('@opuscapita/react-filemanager-connector-node-v1');

const apiOptions = {
  ...connectorNodeV1.apiOptions,
  apiRoot: `http://localhost:3020` // Or you local Server Node V1 installation.
};
console.log(apiOptions, connectorNodeV1.apiOptions);

/* const fileManager = function() {
  return React.createElement('div', {
    style: {
      height: '480px'
    }
  }, React.createElement(FileManager, null, React.createElement(FileNavigator, {
    id               : 'filemanager-1',
    api              : connectorNodeV1.api,
    apiOptions       : apiOptions,
    capabilities     : connectorNodeV1.capabilities,
    listViewLayout   : connectorNodeV1.listViewLayout,
    viewLayoutOptions: connectorNodeV1.viewLayoutOptions
  }), ' '), ' ');
} */


class fileManager extends React.Component {
  divStyle = {
    height: 100 + '%'
  };
  render() {
    return html
    `<div style=${this.divStyle}>
    <${FileManager}>
        <${FileNavigator}
        id="filemanager-1"
        api=${connectorNodeV1.api}
        apiOptions=${apiOptions}
        capabilities=${connectorNodeV1.capabilities}
        listViewLayout=${connectorNodeV1.listViewLayout}
        viewLayoutOptions=${connectorNodeV1.viewLayoutOptions} />
     <//>
     <//>`
  };
}

// ReactDOM.render(React.createElement(fileManager), document.querySelector('#mainLayout'))


mainLayout.registerComponent('fileManager', fileManager);
addMenuItem('FM', 'fileManager', {}, "react-component");
