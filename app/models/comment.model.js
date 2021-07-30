const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// creating blop post schema
const commentSchema = new Schema({
  id: ObjectId,
  body: {
    type: String,
    required: true,
  },
});

module.exports = ("comments", commentSchema);
