const express = require("express");
const router = express.Router();

// Models
let Word = require("../models/word");

// get words
router.route("/words").get((req, res) => {
  Word.find({}, function(err, words) {
    if (err) {
      res.send(err);
      return;
    }
    res.json(words);
  });
});

module.exports = router;
