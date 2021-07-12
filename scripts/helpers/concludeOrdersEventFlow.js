const uuid = require('uuid');
const eventMessageBuilder = require('../../src/data/order/eventMessageBuilder');
const createOrdersMessage = require('../../src/usecases/createOrdersMessage');

module.exports = async (merchantId) => {
  const originOrderId = uuid.v4();
  const origin = 'IFOOD';
  const status = "IN_TRANSIT"
  
  const placedMessage = eventMessageBuilder.build({ originOrderId, origin, merchantId, event: "PLACED" });
  const updateStatusMessage = eventMessageBuilder.build({ originOrderId, origin, merchantId, event: "UPDATE_STATUS", status });
  const updateDetailsMessage = eventMessageBuilder.build({ originOrderId, origin, merchantId, event: "UPDATE_DETAILS" });
  const concludedMessage = eventMessageBuilder.build({ originOrderId, origin, merchantId, event: "UPDATE_STATUS", status: 'CONCLUDED' });
  
  createOrdersMessage(placedMessage).then(() => {
    console.log('PLACED EVENT SENT')
    setTimeout(() => {
      createOrdersMessage(updateStatusMessage).then(() => {
        console.log('UPDATE_STATUS EVENT SENT')
        setTimeout(() => {
          createOrdersMessage(updateDetailsMessage).then(() => {
            console.log('UPDATE_DETAILS EVENT SENT')
            setTimeout(() => {
              createOrdersMessage(concludedMessage).then(() => {
                console.log('CONCLUDED EVENT SENT')
              })
            }, 5 * 1000)
          })
        }, 5 * 1000)
      })
    }, 5 * 1000)
  });
};