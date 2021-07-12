const getListOfMerchants = require("./getListOfMerchants");

module.exports = () => {
  const merchants = getListOfMerchants();
  return merchants[0];
};