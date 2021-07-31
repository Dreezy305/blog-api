require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./app/config");
const blogs = require("./blogs");
const Comment = require("./app/models/comment.model");
// const blogPost = require("./app/models/blogpost.model");
// const router =
const blogPostModel = require("./app/models/blogpost.model");

const app = express();
app.use(cors());

app.use(express.json());

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

// GET BLOG POSTS
app.get("/api/blogposts", async (req, res) => {
  const blogPosts = await blogPostModel.find();
  console.log(blogPosts);
  res.json(blogPosts);
});

function paginatedResults() {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;
    const results = {};

    try {
      results.results = await Blogs.find()
        .sort({ id: 1 })
        .limit(limit)
        .skip(skipIndex)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(400).json({ message: "Error Occured" });
    }
  };
}

// GET A SINGLE BLOG POST WITH ID REQUEST HANDLER
app.get("/api/blogposts/:id", async (req, res) => {
  const blog = await blogPostModel.findById(req.params.id);
  if (!blog)
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
      );
  res.send(blog);
});

// CREATE A BLOG POST WITH ID REQUEST HANDLER
app.post("/api/blogposts", (req, res) => {
  const newBlogPost = new blogPostModel(req.body);
  newBlogPost.save((error, blogPostModel) => {
    if (error) {
      return res.status(400).json({
        msg: "there was an error",
        error,
      });
    } else {
      return res.status(200).json({
        msg: " blop post successfully created",
        blogPostModel,
      });
    }
  });
});

// UPDATE BLOG POST REQUEST HANDLERS
app.put("/api/blogposts/:id", async (req, res) => {
  const blog = await blogPostModel.findById(req.params.id);
  if (!blog)
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>'
      );

  blog.title = req.body.title;
  blog.description = req.body.description;
  blog.image = req.body.image;
  blog.body = req.body.body;
  res.send(blog);
});

// DELETE BLOG WITH ID REQUEST HANDLER
app.delete("/api/blogposts/:id", async (req, res) => {
  const blog = await comment.findById(req.params.id);
  if (!blog) {
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
      );
  }
  comment.remove();

  res.send(blog);
});

// create comments by id
app.post("/api/blogpost/:id/addComment", (req, res) => {
  const { id } = req.params.id;
  const comment = new Comment({
    // blogId: req.body.blogId,
    content: req.body.content,
    createdAt: new Date(),
    post: id,
  });
  comment.save();

  const postRelated = blogPost.findById(id);
  postRelated.comments.push(comment);

  postRelated.save((error) => {
    if (error) {
      return res.status(400).send("there was an error");
    }
    // res.redirect("/");
  });
});
