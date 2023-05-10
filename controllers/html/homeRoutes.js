const router = require("express").Router();
const { User, Friend } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    if (req.session.logged_in) {
      console.log("1");
      const friendData = await Friend.findAll({
        where: {
          user_id: req.session.user_id,
        },
        order: [["name", "ASC"]],
      });

      const friends = friendData.map((friend) => {
        const tempFriend = friend.get({ plain: true });

        if (tempFriend.photo) {
          const photoBuffer = tempFriend.photo;
          const photoDataUri = `data:image/png;base64,${photoBuffer.toString(
            "base64"
          )}`;
          tempFriend.photo = photoDataUri;
        }

        return tempFriend;
      });

      res.render("friendlist", {
        friends,
        logged_in: req.session.logged_in,
      });
    } else {
      res.render("login");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to load friendlist." });
  }
});

router.get("/login", (req, res) => {
  res.redirect("/");
});

module.exports = router;
