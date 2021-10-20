const { Router } = require("express");

module.exports = {
  updateStore: async (req, res) => {
    console.log(req.params, req.body);
    return res.status(200).send("OK");
  },

  router() {
    const router = Router();

    router.post("/update-availability", this.updateStore);

    return router;
  },
};
