const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const diarySchema = new Schema({
  _id: { type: ObjectId },
  id_user: { type: ObjectId },
  detail: { type: String },
  content: { type: String },
  title: { type: String },
  layout: { type: Array },
  time_created: { type: String },
  privacy: { type: Boolean },
  report: { type: Boolean },
});

module.exports = mongoose.model("diaries", diarySchema);
