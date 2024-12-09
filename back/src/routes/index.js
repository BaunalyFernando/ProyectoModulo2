const { Router } = require("express");
const moviesRouter = require("../routes/moviesRouter");

const router = Router();

router.use("/movies", moviesRouter);

module.exports = router;