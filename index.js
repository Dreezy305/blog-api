const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./app/config");

const app = express();

// const port = process.env.PORT || 5000;

app.set("port", config.port);

app.listen(app.get("port"), () => {
  console.log(`listening on port ${app.get("port)}....`);
});

app.get("/", (req, res) => {
  res.send("The blog API goes here");
});
