const uuid = require('uuid');
const eventMessageBuilder = require('../../src/data/order/eventMessageBuilder');
const createOrdersMessage = require('../../src/usecases/createOrdersMessage');

module.exports = async ({ event, merchantId, originOrderId, origin, status }) => {
  const messageOriginOrderId = originOrderId || uuid.v4();
  const messageOrigin = origin || 'IFOOD';
  const messageMerchantId = merchantId || "1"
  
  const message = eventMessageBuilder.build({ 
    originOrderId: messageOriginOrderId, 
    origin: messageOrigin,
    merchantId: messageMerchantId,
    status,
    event
  });
  
  createOrdersMessage(message).then(() => {
    console.log('ORDER EVENT SENT')
  });
};