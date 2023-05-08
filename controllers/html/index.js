const router = require("express").Router();
const homeRoutes = require("./homeRoutes.js");
const friendRoutes = require("./friendRoutes.js");
const familyMemberRoutes = require("./familyMemberRoutes.js");

router.use("/friend", friendRoutes);
router.use("/familyMember", familyMemberRoutes);
router.use("/", homeRoutes);

module.exports = router;
