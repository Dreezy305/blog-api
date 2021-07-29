const express = require("express");
const blogPostController = require("../app/controllers/blogpost.controller");

module.exports = (app) => {
  const apiRoutes = express.Router();
  const blogPostRoutes = express.Router();

  apiRoutes.use("/blogPosts", blogPostRoutes);

  blogPostRoutes.use("/", blogPostController.publishPost);

  app.use("/api", apiRoutes);
};
