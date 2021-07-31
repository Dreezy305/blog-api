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
  },
  date: { type: Date, default: Date.now },
  description: {
    type: String,
    required: true,
  },
  tags: { type: [String], index: true },
  updated: { type: Date },
});

// blogPostSchema.virtual("url").get(() => {
//   return "/api/blogpost/" + this.id;
// });

module.exports = mongoose.model("BlogPosts", blogPostSchema);
