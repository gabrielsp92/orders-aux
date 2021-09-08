module.exports = (merchantId) => ({
  id: merchantId || 1,
  autoAccept: true,
  autoStatusChange: true,
  posChannel: "GCOM",
  statusPos: "IN_PREPARATION",
  pdvStatusUpdate: true,
  integrationToken: "token",
});
