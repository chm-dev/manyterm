const React = require('react');
const ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
const {FileManager, FileNavigator} = require('@opuscapita/react-filemanager');
const connectorNodeV1 = require('@opuscapita/react-filemanager-connector-node-v1');

const apiOptions = {
    ...connectorNodeV1.apiOptions,
    apiRoot: `http://localhost:3020` // Or you local Server Node V1 installation.
};

const fileManager = createReactClass({
    render: function() {
        React.createElement('div', {
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
    }
});

mainLayout.registerComponent('fileManager', fileManager);
addMenuItem('FM', 'fileManager', {});
