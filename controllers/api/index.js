const router = require("express").Router();
const friendRoutes = require("./friendRoutes.js");
const familyMemberRoutes = require("./familyMemberRoutes.js");
const userRoutes = require("./userRoutes.js");
const uploadRoutes = require("./uploadRoutes.js");

router.use("/friend", friendRoutes);
router.use("/familyMember", familyMemberRoutes);
router.use("/user", userRoutes);
router.use("/upload", uploadRoutes);

module.exports = router;
