const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const commentSchema = new Schema({
  id: { type: ObjectId },
  userid: { type: ObjectId },
  momentid: { type: ObjectId },
  content: { type: String },
  createdat: { type: Number },
});

module.exports = mongoose.model("comment", commentSchema);
