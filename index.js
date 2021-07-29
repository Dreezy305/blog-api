const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./app/config");
const router = require("./app/router");

// mongoose.set('useUnifiedTopology': true);

const app = express();

app.use(bodyParser.json());

app.set("port", config.port);

app.listen(app.get("port"), (err) => {
  if (err) console.log(error);
  console.log(`listening on ${app.get("port")}...`);
  const db = mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log(`Mongo db connected ${db}`);
  });
});

// if (process.env.NODE_ENV === "test") {
//   app.set("port", config.test_port);
//   app.listen(app.get("port"), (err) => {
//     if (err) console.error(err);
//     console.log(`Server listening on port$ {app.get('port')}...`);
//     const db = mongoose.connect(config.test_db);
//   });
// } else {
//   app.set("port", config.port);
//   app.listen(app.get("port"), (err) => {
//     if (err) console.error(err);
//     console.log(`Server listening on port ${app.get("port")}...`);
//     const db = mongoose.connect(config.db);
//     mongoose.connection.on("connected", () => {
//       console.log(`Mongoose connected to ${config.db}`);
//     });
//   });
// }

app.get("/", (req, res) => {
  res.send("The blog API goes here");
});

router(app);
