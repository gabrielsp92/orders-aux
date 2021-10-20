require("dotenv").config();

const {
  listSQS,
  createPosQueue,
  createOrdersQueue,
} = require("../src/infra/localstack/sqs");

// const createSns = require("../src/infra/localstack/createSns");
// createSns.execute();
createOrdersQueue();
createPosQueue();
listSQS();
