const router = require("express").Router();
const { User, Friend, FamilyMember } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const familyMemberData = await FamilyMember.findByPk(req.params.id, {
      include: {
        model: Friend,
      },
    });

    const familyMember = familyMemberData.get({ plain: true });
    console.log(familyMember);
    res.render("edit-family-member", {
      familyMember,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/friend/:id/newFamilyMember", withAuth, async (req, res) => {
  try {
    res.render("new-family-member", {
      friend_id: req.params.id,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
