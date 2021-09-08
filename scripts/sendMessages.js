require("dotenv").config();
const eventFlow = process.env.EVENT_FLOW || "concluded";

console.log(`🚀 initalizing ${eventFlow} order event flow`);

const singleOrderMessage = require("./helpers/singleOrderMessage");
const concludedOrdersEventFlow = require("./helpers/concludeOrdersEventFlow");
const cancelledOrdersEventFlow = require("./helpers/cancelledOrdersEventFlow");
const activeOrdersEventFlow = require("./helpers/activeOrdersEventFlow");

const merchantId = "1";

const eventFlowFunctions = {
  active: activeOrdersEventFlow,
  concluded: concludedOrdersEventFlow,
  canceled: cancelledOrdersEventFlow,
  single: singleOrderMessage,
};

if (eventFlowFunctions[eventFlow]) {
  if (eventFlow === "single") {
    eventFlowFunctions[eventFlow]({
      merchantId,
      status: "PLACED",
      event: "PLACED",
    });
  } else {
    eventFlowFunctions[eventFlow](merchantId);
  }
}
