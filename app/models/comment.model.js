const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// creating blop post schema
const commentSchema = new Schema({
  blogId: ObjectId,
  content: {
    type: String,
    required: true,
  },
  createdAt: Date,
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BlogPosts",
  },
});

module.exports = mongoose.model("Comments", commentSchema);
