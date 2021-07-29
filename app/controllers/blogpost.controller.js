"use strict";
const blogPostModel = require("../models/blogpost.model");

// create new blog post
exports.publishPost = (req, res) => {
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
};
