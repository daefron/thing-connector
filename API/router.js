const { Router } = require("express");

const mainRouter = Router();

const mainController = require("./controller");

mainRouter.get("/data", mainController.getData);

module.exports = mainRouter;