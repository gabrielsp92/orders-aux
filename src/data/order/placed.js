const uuid = require('uuid');
module.exports = ({ originOrderId, merchantId }) => ({
  "id":"97ab9879-fcc0-4a22-8cfd-425b5c6838fe",
  "schema":"ORDER_SAVE_NEW_EVENT",
  "schemaVersion":1,
  "source":"connector-ifood",
  "payload":{
      "origin":"IFOOD",
      "originOrderId": originOrderId || uuid.v4(),
      "invoiceDocument": "88888",
      "originEventId":"abc-456-afge-451-n15484",
      "merchantId": `${merchantId || "1"}`,
      "event":"PLACED",
      "originEvent":"PLACED",
      "timestamp":"2017-05-02T16:01:16.567Z",
      "originShortReference": "1234",
      "details":{
          "scheduled": false,
          "serviceType":"DELIVERY",
          "timeToAcceptInSeconds": 300,
          "preparation":{
              "preparationTimeInSeconds":13000,
              "minPreparationTimeInSeconds":10000,
              "maxPreparationTimeInSeconds":15000,
              "preparationStartDateTime": "2017-05-02T16:01:16.567Z"
          },
          "packaging":{
              "shouldIncludeDisposableItems":true
          },
          "merchant":{
              "originId":"a940f92d-ba60-486d-b558-acbb1fedd175",
              "name":"Restaurante Test",
              "phoneNumber":"32-99999999",
              "address":{
                  "formattedAddress":"PEDIDO DE TESTE - NÃO ENTREGAR - Ramal Bujari, 10",
                  "country":"BR",
                  "state":"AC",
                  "city":"Bujari",
                  "neighborhood":"Bairro",
                  "streetName":"PEDIDO DE TESTE - NÃO ENTREGAR - Ramal Bujar",
                  "number":"10",
                  "postalCode":"69923000",
                  "complement":"Complemento do endereço",
                  "reference":"Ponto de referência",
                  "coordinates":{
                      "latitude":"-9.821256",
                      "longitude":"-67.948009"
                  }
              }
          },
          "payment":{
              "paymentMethods": [
                  {
                      "name": "VISA",
                      "code": "VIS",
                      "value": 28,
                      "prepaid": true,
                      "issuer": "VISA",
                      "method": "CREDIT"
                  },
                  {
                      "name": "DINHEIRO",
                      "code": "DIN",
                      "value": 3,
                      "prepaid": false,
                      "changeFor": 3,
                      "method": "CASH"
                  }
              ],
              "charges":{
                  "subTotal":2000,
                  "total":2000,
                  "totalDiscounts":0,
                  "totalInCash":2000,
                  "tip":0,
                  "tax":0,
                  "packagingFee":0,
                  "deliveryFee":0,
                  "serviceFee":0,
                  "totalFee":0,
                  "totalFeeTax":0
              }
          },
          "customer":{
              "originId":"114235279",
              "firstName":"Pedido",
              "lastName":"Teste",
              "displayName":"Pedido de teste",
              "document":"77788866655",
              "phoneNumber":"0800 + ID ",
              "email":"String - Email do cliente"
          },
          "cart":{
              "originId":"123124123",
              "notes":"String - Observações sobre o pedido",
              "items":[
                  {
                      "originId":"123123",
                      "sku":"44423212",
                      "name":"Nome do Produto",
                      "type":"Tipo do Produto",
                      "quantity":1,
                      "description":"Dados complementares sobre o produto fornecidos pelo estabelecimento",
                      "comments":"Comentarios sobre o produto fornecidos pelo cliente",
                      "image":"Endereço da imagem do produto",
                      "unitPrice":2000,
                      "totalPrice":2000,
                      "baseUnitPrice":2000,
                      "baseTotalPrice":2000,
                      "discount":0,
                      "addition":0,
                      "externalCode":"12342323",
                      "subItems":[
                          {
                              "name":"Nome do subitem",
                              "quantity":1,
                              "unitPrice":0,
                              "totalPrice":0,
                              "discount":0,
                              "addition":0,
                              "externalCode":"123123"
                          }
                      ]
                  }
              ]
          },
          "delivery":{
              "deliveryDateTime":"String - Data e hora da entrega do pedido, formato ISO 8601",
              "deliveredBy": "ORIGIN",
              "address":{
                  "formattedAddress":"PEDIDO DE TESTE - NÃO ENTREGAR - Ramal Bujari, 10",
                  "country":"BR",
                  "state":"AC",
                  "city":"Bujari",
                  "neighborhood":"Bairro",
                  "streetName":"PEDIDO DE TESTE - NÃO ENTREGAR - Ramal Bujar",
                  "number":"10",
                  "postalCode":"69923000",
                  "complement":"Complemento do endereço",
                  "reference":"Ponto de referência",
                  "coordinates":{
                      "latitude":"-9.821256",
                      "longitude":"-67.948009"
                  }
              }
          }
      }
  }
});