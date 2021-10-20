const { SQS, SNS, listParams, msgParams } = require("./util.js");
//https://onexlab-io.medium.com/localstack-sqs-node-js-c5f05eb74211
module.exports = {
  listSQS: async () => {
    SQS.listQueues(listParams, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.QueueUrls);
      }
    });
  },

  createOrdersQueue: async () => {
    const createParams = {
      QueueName: "ORDERS_QUEUE",
      Attributes: {
        DelaySeconds: "10",
        MessageRetentionPeriod: "86400",
      },
    };
    SQS.createQueue(createParams, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("ORDERS_QUEUE Created", data.QueueUrl);
      }
    });
  },

  createPosQueue: async () => {
    const createParams = {
      QueueName: "POS_QUEUE",
      Attributes: {
        DelaySeconds: "10",
        MessageRetentionPeriod: "86400",
      },
    };
    SQS.createQueue(createParams, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("POS_QUEUE Created", data.QueueUrl);
      }
    });
  },

  createSnsTopic: async () => {
    const createParams = {
      Name: "POS_SNS",
    };
    SNS.createTopic(createParams, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("SNS TOPIC Created", data.TopicArn);
      }
    });
  },

  sendMessage: async (msg, QUEUE_URL) => {
    SQS.sendMessage(msgParams(msg, QUEUE_URL), function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.MessageId);
      }
    });
  },
};

// var params = {
//   Name: 'STRING_VALUE', /* required */
//   Attributes: {
//     '<attributeName>': 'STRING_VALUE',
//     /* '<attributeName>': ... */
//   },
//   Tags: [
//     {
//       Key: 'STRING_VALUE', /* required */
//       Value: 'STRING_VALUE' /* required */
//     },
//     /* more items */
//   ]
// };
// sns.createTopic(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });
