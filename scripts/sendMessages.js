require('dotenv').config();
const uuid = require('uuid');
const eventMessageBuilder = require('../src/data/order/eventMessageBuilder')
const createOrdersMessage = require('../src/usecases/createOrdersMessage');


const simulateEventFlow = async (merchantId) => {

  const originOrderId = uuid.v4();
  const origin = 'IFOOD';
  const status = "IN_TRANSIT"
  
  const placedMessage = eventMessageBuilder.build({ originOrderId, origin, merchantId, event: "PLACED" });
  const updateStatusMessage = eventMessageBuilder.build({ originOrderId, origin, merchantId, event: "UPDATE_STATUS", status });
  const updateDetailsMessage = eventMessageBuilder.build({ originOrderId, origin, merchantId, event: "UPDATE_DETAILS" });
  const cancelledMessage = eventMessageBuilder.build({ originOrderId, origin, merchantId, event: "CANCELED" });
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

// const seedEvents = function (merchantId = 1) {
//   simulateEventFlow(`${merchantId}`);
//   setTimeout(() => {
//     const nextMerchant = merchantId >= 6 ? 1 : merchantId++
//     return seedEvents(nextMerchant)
//   }, 300 * 1000)
// }

// seedEvents();
// seedEvents(3);


simulateEventFlow("5");