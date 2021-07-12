const { Router } = require('express');
const getListOfMerchants = require('../../usecases/getListOfMerchants');
const getMerchant = require('../../usecases/getMerchant')

module.exports = {
  listMerchant: async (_, res) => {
    const merchants = getListOfMerchants();
    return res.status(200).send({ content: merchants });
  },
  getMerchant: async (req, res) => {
    const merchant = getMerchant();
    return res.status(200).send(merchant);
  },

  router () {
    const router = Router();

    router.get('/', this.listMerchant);
    router.get('/:merchantId', this.getMerchant);

    return router;
  }
}