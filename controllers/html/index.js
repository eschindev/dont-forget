const router = require("express").Router();
const homeRoutes = require("./homeRoutes.js");
const friendRoutes = require("./friendRoutes.js");

router.use("/friend", friendRoutes);
router.use("/", homeRoutes);

module.exports = router;
