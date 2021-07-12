module.exports = ({ originOrderId, origin, merchantId, status }) => ({
  "id":"97ab9879-fcc0-4a22-8cfd-425b5c6838fe",
  "schema":"ORDER_SAVE_NEW_EVENT",
  "schemaVersion":1,
  "source":"connector-ifood",
  "payload":{
     "origin": origin || "IFOOD",
     "originOrderId": originOrderId || "1",
     "merchantId": merchantId || "1",
     "event": status || "CONFIRMED",
     "originEvent": status || "CONFIRMED",
     "timestamp": new Date()
  }
})