const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// creating blop post schema
const blogPostSchema = new Schema({
  id: ObjectId,
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
  date: { type: Date, default: Date.now },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  comment: [String],
  updated: {
    type: string,
  },
});

module.exports = ("BlogPosts", blogPostSchema);
