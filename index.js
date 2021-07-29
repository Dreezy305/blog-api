const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./app/config");
const blogs = require("./blogs");

// const router = require("./app/router");
// router(app);

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

app.get("/", (req, res) => {
  res.send("The blog API goes here");
});

app.get("/api/blogposts", (req, res) => {
  res.send(blogs);
});

// get a single blog with the id
app.get("/api/blogposts/:id", (req, res) => {
  const book = blogs.find((c) => c.id === parseInt(req.params.id));
  if (!blogs)
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
      );
  res.send(book);
});

// create a blog post
app.post("/api/books", (req, res) => {
  const { error } = req.body;
  if (error) {
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
      );
  } else {
    const blog = {
      id: blogs.length + 1,
      title: req.body.title,
    };
    blogs.push(blog);
    res.send(blog);
  }
});
