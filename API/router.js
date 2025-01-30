const { Router } = require("express");

const mainRouter = Router();

const mainController = require("./controller");

mainRouter.post("/data", mainController.postData);

module.exports = mainRouter;