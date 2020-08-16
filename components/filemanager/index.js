const React = require('react');

const {generateSimpleID} = require('../../common');
const ReactDOM = require('react-dom');

const htm = require('htm');
const html = htm.bind(React.createElement)

const {FileManager, FileNavigator} = require('@opuscapita/react-filemanager');
const {default: connectorNodeV1} = require('@opuscapita/react-filemanager-connector-node-v1');

window.FileNavigator = FileNavigator;

const apiOptions = {
  ...connectorNodeV1.apiOptions,
  apiRoot: `http://localhost:3020` // Or you local Server Node V1 installation.
};
console.log(apiOptions, connectorNodeV1.apiOptions);
_ = {};
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
  constructor(props) {
    super(props);
    this.state = {
      nodejsInitPath: '',
      nodejsInitId  : '',
      themeClassName: 'oc-fm--file-manager--default-theme'
    };


  }


  componentDidMount() {
    this.handleNodejsInitPathChange('')
  }
  render() {
    const {nodejsInitPath} = this.state;
    return html
    `<div style=${ {
      height: 100 + '%'}}>
      <input value=${nodejsInitPath} onChange=${ (e) => this.handleNodejsInitPathChange(e.target.value)} />
      <${FileNavigator}
        id='fm${generateSimpleID()}' api=${connectorNodeV1.api}
        apiOptions=${apiOptions} capabilities=${connectorNodeV1.capabilities}
        listViewLayout=${connectorNodeV1.listViewLayout} viewLayoutOptions=${connectorNodeV1.viewLayoutOptions} />
    <//>`
    };

    handleNodejsLocationChange = (resourceLocation) => {
      const resourceLocationString = '/' + resourceLocation.slice(1, resourceLocation.length).map(o => o.name).join('/');
      this.setState({
        nodejsInitPath: resourceLocationString,
        nodejsInitId  : resourceLocation[resourceLocation.length - 1].id
      });
    }


    handleNodejsInitPathChange = async (path) => {
      this.setState({
        nodejsInitPath: path || './'
      });

      const apiOptions = {
        apiRoot: 'http://localhost:3020'
      };

      const nodejsInitId = await connectorNodeV1.api.getIdForPath(apiOptions, path || '/');

      if (nodejsInitId) {
        this.setState({nodejsInitId});
      }
    }


  }
// initialResourceId=${document.querySelector( 'input#t100' ).value}

  mainLayout.registerComponent('fileManager', fileManager);
  addMenuItem('FM', 'fileManager', {}, "react-component");
