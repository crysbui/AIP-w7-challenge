const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// API file for interacting with MongoDB
const api = require("./routes/api");

mongoose
  .connect(
    "mongodb://localhost/words",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Bad connection", err));

const app = express(); // initialize app variable

app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/api/words", (req, res) => {
//   res.send([1, 2, 3]);
// });

// API location
app.use("/", api);

// for parsing application/json
app.use(bodyParser.json());

app.listen(3000, () => console.log("Listening on PORT 3000..."));
