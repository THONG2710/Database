const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const diarySchema = new Schema({
  _id: { type: ObjectId },
  userid: { type: ObjectId },
  diary: { type: String },
  detail: { type: String },
  content: { type: String },
  title: { type: String },
  layout: { type: Array },
  createdat: { type: String },
  privacy: { type: Boolean },
  report: { type: Boolean },
  username: { type: String},
});

module.exports = mongoose.model("diaries", diarySchema);
