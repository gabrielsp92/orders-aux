
// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});
// uid lib
const uuid = require('uuid')

process.env.AWS_ACCESS_KEY_ID
const awsEndpoint = process.env.LOCALSTACK_URL || 'http://localhost:4566'

const config = {
    endpoint: new AWS.Endpoint(awsEndpoint),
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
}


// Create an SQS service object
const SQS = new AWS.SQS(config);

const listParams = {};

const msgParams = (msg, QUEUE_URL)  => { 
  return {
      // Remove DelaySeconds parameter and value for FIFO queues
      // DelaySeconds: 10,
      MessageAttributes: {},
      MessageBody: JSON.stringify(msg),
      MessageDeduplicationId: uuid.v4(),  // Required for FIFO queues
      MessageGroupId: "Group1",  // Required for FIFO queues
      QueueUrl: QUEUE_URL
  }
};

module.exports = {
    SQS,
    listParams,
    msgParams
}