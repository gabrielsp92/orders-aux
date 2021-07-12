module.exports = (merchantId) => (
  {
    id: merchantId || 1,
    autoAccept: true,
    autoStatusChange: true,
    posChannel: false
  }
)