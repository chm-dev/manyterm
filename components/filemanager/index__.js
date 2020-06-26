'use strict';

var _react = _interopRequireDefault(require('react'));

var _reactDom = _interopRequireDefault(require('react-dom'));

var _reactFilemanager = require('@opuscapita/react-filemanager');

var _reactFilemanagerConnectorNodeV = _interopRequireDefault(
    require('@opuscapita/react-filemanager-connector-node-v1')
);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule
        ? obj
        : {
            default: obj
        };
}

const apiOptions = {
    ..._reactFilemanagerConnectorNodeV.default.apiOptions,
    apiRoot: `http://opuscapita-filemanager-demo-master.azurewebsites.net/` // Or you local Server Node V1 installation.
};

const fileManager/*#__PURE__*/
= _react.default.createElement('div', {
    style: {
        height: '480px'
    }
},
/*#__PURE__*/
_react.default.createElement(_reactFilemanager.FileManager, null,
/*#__PURE__*/
_react.default.createElement(_reactFilemanager.FileNavigator, {
    id               : 'filemanager-1',
    api              : _reactFilemanagerConnectorNodeV.default.api,
    apiOptions       : apiOptions,
    capabilities     : _reactFilemanagerConnectorNodeV.default.capabilities,
    listViewLayout   : _reactFilemanagerConnectorNodeV.default.listViewLayout,
    viewLayoutOptions: _reactFilemanagerConnectorNodeV.default.viewLayoutOptions
})));

mainLayout.registerComponent('fileManager', fileManager);
addMenuItem('fileManager', fileManager, null);
