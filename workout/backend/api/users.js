const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/", function (req, res) {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save(function (err) {
    if (err) {
      res.status(500).send("Error making new user");
    } else {
      res.status(200).send("New user registered");
    }
  });
});

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

router.delete("/:username", (req, res) => {
  User.deleteOne({ username: req.params.username })
    .then(() => res.json({ message: "Deleted usename" }))
    .catch((error) => console.log(error));
});

module.exports = router;
