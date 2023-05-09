const router = require("express").Router();
const { Friend } = require("../../models");

router.post("/", async (req, res) => {
  try {
    if (req.body.photo) {
      req.body.photo = Buffer.from(req.body.photo, "base64");
    }

    const friendData = await Friend.create(req.body);

    if (!friendData) {
      return res
        .status(400)
        .json({ message: "Failed to create friend. Please try again. " });
    }

    res.status(200).json(friendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (req.body.photo) {
      req.body.photo = Buffer.from(req.body.photo, "base64");
    }

    const friendData = await Friend.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!friendData) {
      return res
        .status(400)
        .json({ message: "Failed to update friend. Please try again." });
    }

    res.status(200).json(friendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const friendData = await Friend.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!friendData) {
      return res
        .status(400)
        .json({ message: "Failed to delete friend. Please try again." });
    }

    res.status(200).json(friendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
