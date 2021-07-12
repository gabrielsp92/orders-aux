const { Router } = require('express');
const createOrdersMessage = require('../../usecases/createOrdersMessage')

module.exports = {
  createOrdersMessage: async (req, res) => {
    const result = await createOrdersMessage(req.body);
    return res.status(200).send(result);
  },

  router () {
    const router = Router();

    router.post('/orders', this.createOrdersMessage);

    return router;
  }
}