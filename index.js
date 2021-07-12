require('dotenv').config();

const Server = require('./src/gateways/Server');

const server = new Server()

server.start();