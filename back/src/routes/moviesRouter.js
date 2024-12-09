const Router = require("express");
const moviesController = require("../controller/moviesController");
const { validateMovie } = require("../middlewares/validateMovie");

const userRouter = Router();

userRouter.get("/", moviesController.getAllMovies);
userRouter.delete("/:id", moviesController.deleteMovie);
userRouter.post("/", validateMovie, moviesController.createMovie);


module.exports = userRouter;