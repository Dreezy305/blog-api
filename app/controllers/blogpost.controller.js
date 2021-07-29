"use strict";
const blogPostModel = require("../models/blogpost.model");

// create new blog post
exports.publishPost = (req, res) => {
  const newBlogPost = new blogPostModel(req.body);
  newBlogPost.save((error, blogPostModel) => {
    if (error) {
      res.status(400).json({
        msg: "",
        error,
      });
    }
  });
};
