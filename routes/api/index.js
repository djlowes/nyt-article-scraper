const router = require("express").Router();
const articleRoutes = require("./api");

router.use("/articles", articleRoutes);

module.exports = router;
