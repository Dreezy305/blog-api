const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// creating blop post schema
const commentSchema = new Schema({
  id: ObjectId,
  content: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BlogPosts",
  },
});

module.exports = mongoose.model("Comments", commentSchema);
