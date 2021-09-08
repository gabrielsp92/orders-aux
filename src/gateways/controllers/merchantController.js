const { Router } = require("express");
const getListOfMerchants = require("../../usecases/getListOfMerchants");
const getMerchant = require("../../usecases/getMerchant");

module.exports = {
  listMerchant: async (req, res) => {
    const { authorization } = req.headers;
    console.log("Token: ", authorization);
    if (!authorization) throw new Error("JWT token is required");
    const merchants = getListOfMerchants();
    return res.status(200).send(merchants);
  },
  getMerchant: async (_, res) => {
    const merchant = getMerchant();
    return res.status(200).send(merchant);
  },

  router() {
    const router = Router();

    router.get("/user", this.listMerchant);
    router.get("/:merchantId", this.getMerchant);

    return router;
  },
};
