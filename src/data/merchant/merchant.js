module.exports = (merchantId) => ({
  id: merchantId || 1,
  autoAccept: true,
  autoStatusChange: true,
  posChannel: "GCOM",
  statusPos: "PLACED",
  pdvStatusUpdate: true,
  integrationToken: "token",
  originPos: ["UBER_EATS"],
});
