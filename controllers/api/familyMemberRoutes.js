const router = require("express").Router();
const { FamilyMember } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const familyMemberData = await FamilyMember.create(req.body);

    if (!familyMemberData) {
      return res
        .status(400)
        .json({ message: "Failed to create family member. Please try again." });
    }

    res.status(200).json(familyMemberData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const familyMemberData = await FamilyMember.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!familyMemberData) {
      res
        .status(400)
        .json({ message: "Failed to update family member. Please try again." });
    }

    res.status(200).json(familyMemberData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const familyMemberData = await FamilyMember.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!familyMemberData) {
      return res
        .status(400)
        .json({ message: "Failed to delete family member. Please try again." });
    }

    res.status(200).json(familyMemberData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
