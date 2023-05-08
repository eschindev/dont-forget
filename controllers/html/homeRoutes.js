const router = require("express").Router();
const { User, Friend } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    if (req.session.logged_in) {
      const friendData = await Friend.findAll({
        where: {
          user_id: req.session.user_id,
        },
        order: [["name", "ASC"]],
      });

      const friends = friendData.map((friend) => friend.get({ plain: true }));

      res.render("homepage", {
        friends,
        logged_in: req.session.logged_in,
      });
    } else {
      res.render("login");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  res.redirect("/");
});

module.exports = router;
