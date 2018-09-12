const mongoose = require("mongoose");

let wordSchema = mongoose.Schema({
  content: { type: String }
});

// async function addWord() {
//   const wordOne = new wordSchema({
//     content: "test"
//   });
//   const wordTwo = new wordSchema({
//     content: "hi"
//   });
//   const wordThree = new wordSchema({
//     content: "challenge"
//   });
//   await wordOne.save();
//   await wordTwo.save();
//   await wordThree.save();
// }

// addWord();
// async function getWords() {
//   const words = await Word.find();
//   console.log(words);
// }

// getWords();

module.exports = mongoose.model("words", wordSchema);
