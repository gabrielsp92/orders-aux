const placed = require("./placed");
const statusUpdate = require("./statusUpdate");
const detailsUpdate = require("./detailsUpdate");
const cancelled = require("./cancelled");

const EventMessage = {
  PLACED: placed,
  UPDATE_STATUS: statusUpdate,
  UPDATE_DETAILS: detailsUpdate,
  CANCELED: cancelled,
};

module.exports = {
  build: ({ originOrderId, origin, merchantId, status, event }) => {
    const message = EventMessage[event]({
      originOrderId,
      origin,
      merchantId,
      status,
    });
    return message;
  },
};
