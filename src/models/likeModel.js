const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const likeSchema = new Schema({
  id: { type: ObjectId },
  userid: { type: ObjectId },
  momentid: { type: ObjectId },
  createdat: { type: Number },
});

module.exports = mongoose.model("likes", likeSchema);
