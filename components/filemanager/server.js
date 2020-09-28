let config = {
  fsRoot  : '../../../../.',
  rootName: 'Root folder',
  port    : process.env.PORT || '3020',
  host    : process.env.HOST || 'localhost'
};

let filemanager = require('@opuscapita/filemanager-server');
filemanager.server.run(config);
