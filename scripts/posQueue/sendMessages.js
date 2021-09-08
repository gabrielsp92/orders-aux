require("dotenv").config();

const updateStatusMessage = require("../../src/data/pdv-event/updateStatus");
const cancelOrderMessage = require("../../src/data/pdv-event/cancelOrder");
const createPosOrdersMessage = require("../../src/usecases/createPosOrdersMessage");

const orderId = "1";
const status = "CONCLUDED";

const updateMessage = updateStatusMessage({
  orderId,
  event: status,
});

// const cancelMessage = cancelOrderMessage({ orderId });

createPosOrdersMessage(updateMessage);
