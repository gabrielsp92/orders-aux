const routes = require('./Router.js')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

class Server {
  constructor () {
    this.express = express();
    this.express.use(cors());
    this.express.use(morgan('tiny'));
    this.express.use(routes);
  }

  start() {
    const SERVER_PORT = process.env.SERVER_PORT || 4001;
    const ENV = process.env.NODE_ENV || 'DEV';

    return this.express.listen(SERVER_PORT, () => {
      console.log(`Server started on port: ${ SERVER_PORT } - Environment ${ ENV }`);
  });
  }
}

module.exports = Server;