require('dotenv').config();

const { listSQS, createPosQueue, createOrdersQueue } = require('../src/infra/localstack/sqs');

createOrdersQueue();
createPosQueue();
listSQS();