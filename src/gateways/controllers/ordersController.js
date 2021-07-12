const { Router } = require('express');

module.exports = {
  updateOrderStatus: async (req, res) => {
    console.log(req.params, req.body)
    return res.status(200).send('OK');
  },

  router () {
    const router = Router();

    router.put('/:orderId/update-status', this.updateOrderStatus);

    return router;
  }
}