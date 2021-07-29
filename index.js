const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./app/config");
const router = require("./app/router");

const app = express();

app.use(bodyParser.json());

app.set("port", config.port);

app.listen(app.get("port"), (err) => {
  if (err) console.log(error);
  console.log(`listening on ${app.get("port")}...`);
  const db = mongoose.connect(config.db);
  mongoose.connection.on("connected", () => {
    console.log(`Mongo db connected ${db}`);
  });
});

app.get("/", (req, res) => {
  res.send("The blog API goes here");
});

router(app);
