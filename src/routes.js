const { Router } = require("express");
const Routes = Router();

const GetUsersController = require("./controllers/getUsersController");
const DisplayUserController = require("./controllers/displayUserController");
const GetRepositoryController = require("./controllers/getRepositoryController");

Routes.get("/api/users", GetUsersController.getUsers);

Routes.get("/api/users/:username/details", DisplayUserController.displayUser);

Routes.get("/api/users/:username/repos", GetRepositoryController.getRepository);

module.exports = Routes;
