const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const momentScheme = new Schema({
  _id: { type: ObjectId },
  id_user: { type: ObjectId },
  image: { type: String },
  caption: { type: String },
  comments: { type: Array },
  video: { type: Array },
  time_created: { type: String },
  liked: { type: String },
});

module.exports = mongoose.model("moments", momentScheme);
