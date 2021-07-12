module.exports = ({ originOrderId, origin, merchantId }) => ({
  "id":"97ab9879-fcc0-4a22-8cfd-425b5c6838fe",
  "schema":"ORDER_SAVE_NEW_EVENT",
  "schemaVersion":1,
  "source":"connector-ifood",
  "payload":{
    "origin": origin || "IFOOD",
    "originOrderId": originOrderId || "1",
    "merchantId": merchantId || "1",
    "event":"CANCELED",
    "originEvent":"CANCELED",
    "cancellation": {
      "code": "502",
      "reason": "Pedido indisponivel"
    },
    "timestamp":"2017-05-02T16:01:16.567Z"
  }
});