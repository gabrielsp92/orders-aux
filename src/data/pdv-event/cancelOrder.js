module.exports = (data) => ({
  id: "97ab9879-fcc0-4a22-8cfd-425b5c6838fe",
  schema: "UPDATE_ORDER_PDV",
  schemaVersion: 1,
  source: "pdv-linx",
  payload: {
    orderId: data.orderId,
    event: "CANCELED",
    timestamp: new Date(),
    cancellation: {
      code: "402",
      reason: "motivo de cancelamento informado pelo cliente",
    },
  },
});
