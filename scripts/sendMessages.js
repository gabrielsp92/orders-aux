require('dotenv').config();
// const singleOrderMessage = require('./helpers/singleOrderMessage');
// const concludedOrdersEventFlow = require('./helpers/concludeOrdersEventFlow');
// const cancelledOrdersEventFlow = require('./helpers/cancelledOrdersEventFlow');
const activeOrdersEventFlow = require('./helpers/activeOrdersEventFlow');

const merchantId = "5";

activeOrdersEventFlow(merchantId);