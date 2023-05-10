const router = require("express").Router();

router.post("/", (req, res) => {
  console.log("Upload was pinged!");
  res.status(200);
});

module.exports = router;
