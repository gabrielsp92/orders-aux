const sqs = require('../infra/localstack/sqs');

module.exports = async (msg) => {
  const queueUrl = process.env.AWS_SQS_ORDERSSERVICE_EVENTS;
  const result = await sqs.sendMessage(msg, queueUrl);
  return result;
}