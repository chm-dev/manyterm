import React from 'react';
import ReactDOM from 'react-dom';
import {FileManager, FileNavigator} from '@opuscapita/react-filemanager';
import connectorNodeV1 from '@opuscapita/react-filemanager-connector-node-v1';

const apiOptions = {
    ...connectorNodeV1.apiOptions,
    apiRoot: `http://opuscapita-filemanager-demo-master.azurewebsites.net/` // Or you local Server Node V1 installation.
};

class fileManager extends React.component {
    render() {
        <div style={{
                height: '480px'
            }}>
            <FileManager>
                <FileNavigator
                    id='filemanager-1'
                    api={connectorNodeV1.api}
                    apiOptions={apiOptions}
                    capabilities={connectorNodeV1.capabilities}
                    listViewLayout={connectorNodeV1.listViewLayout}
                    viewLayoutOptions={connectorNodeV1.viewLayoutOptions}/>{' '}
            </FileManager>{' '}
        </div>;
    }
}


