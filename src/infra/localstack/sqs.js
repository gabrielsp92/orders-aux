const { SQS, listParams, msgParams } = require('./util.js');
//https://onexlab-io.medium.com/localstack-sqs-node-js-c5f05eb74211
module.exports = {
    listSQS: async () => {
        SQS.listQueues(listParams, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else {
              console.log("Success", data.QueueUrls);
            }
        });
    },

    createOrdersQueue: async () => {
      const createParams = {
        QueueName: 'ORDERS_QUEUE',
        Attributes: {
          'DelaySeconds': '10',
          'MessageRetentionPeriod': '86400'
        }
      }
      SQS.createQueue(createParams, function(err, data) {
          if (err) {
            console.log("Error", err);
          } else {
            console.log("ORDERS_QUEUE Created", data.QueueUrl);
          }
      });
    },

    createPosQueue: async () => {
      const createParams = {
        QueueName: 'POS_QUEUE',
        Attributes: {
          'DelaySeconds': '10',
          'MessageRetentionPeriod': '86400'
        }
      }
      SQS.createQueue(createParams, function(err, data) {
          if (err) {
            console.log("Error", err);
          } else {
            console.log("POS_QUEUE Created", data.QueueUrl);
          }
      });
    },

    sendMessage: async (msg, QUEUE_URL) => {
      SQS.sendMessage(msgParams(msg, QUEUE_URL), function(err, data) {
          if (err) {
            console.log("Error", err);
          } else {
            console.log("Success", data.MessageId);
          }
      });
  },

}