const router = require("express").Router();
const friendRoutes = require("./friendRoutes.js");
const familyMemberRoutes = require("./familyMemberRoutes.js");
const userRoutes = require("./userRoutes.js");

router.use("/friend", friendRoutes);
router.use("/familyMember", familyMemberRoutes);
router.use("/user", userRoutes);

module.exports = router;
