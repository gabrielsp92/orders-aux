const merchantController = require("./controllers/merchantController");
const ordersController = require("./controllers/ordersController");
const sqsController = require("./controllers/sqsController");
const storeController = require("./controllers/storeController");

const express = require("express");

const DefaultRouter = express.Router();

DefaultRouter.use(express.json()).use(express.urlencoded({ extended: true }));

DefaultRouter.use("/merchant", merchantController.router());

DefaultRouter.use("/orders", ordersController.router());

DefaultRouter.use("/queue", sqsController.router());

DefaultRouter.use("/store", storeController.router());

DefaultRouter.use("/*", (req, res, next) => res.status(404).send("not found"));

module.exports = DefaultRouter;
