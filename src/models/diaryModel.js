const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const diarySchema = new Schema({
  _id: { type: ObjectId },
  userid: { type: ObjectId },
  diary: { type: String },
  privacy: { type: String },
  createdat: { type: Number },
});

module.exports = mongoose.model("diaries", diarySchema);
