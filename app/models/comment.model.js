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
});

module.exports = ("Comments", commentSchema);
