const router = require("express").Router();
const {
  User,
  Friend,
  FamilyMember,
  Pet,
  Job,
  Hobby,
  Note,
} = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id/edit", withAuth, async (req, res) => {
  try {
    const friendData = await Friend.findByPk(req.params.id);

    const friend = friendData.get({ plain: true });

    if (friend.photo) {
      const photoBuffer = friend.photo;
      const photoDataUri = `data:image/png;base64,${photoBuffer.toString(
        "base64"
      )}`;
      friend.photo = photoDataUri;
    }

    res.render("edit-friend", {
      friend,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const friendData = await Friend.findByPk(req.params.id, {
      include: [
        {
          model: FamilyMember,
        },
      ],
    });

    const friend = friendData.get({ plain: true });

    if (friend.photo) {
      const photoBuffer = friend.photo;
      const photoDataUri = `data:image/png;base64,${photoBuffer.toString(
        "base64"
      )}`;
      friend.photo = photoDataUri;
    }

    console.log(friend);

    res.render("friend", {
      friend,
      logged_in: req.session.logged_in,
      current_user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("new-friend", {
      user_id: req.session.user_id,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
