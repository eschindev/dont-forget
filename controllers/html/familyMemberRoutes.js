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

router.get("/:id", withAuth, async (req, res) => {
  try {
    const familyMemberData = await FamilyMember.findByPk(req.params.id, {
      include: {
        model: Friend,
      },
    });

    const familyMember = familyMemberData.get({ plain: true });

    res.render("edit-family-member", familyMember);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("new-family-member", {
      user_id: req.session.user_id,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
