const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const momentScheme = new Schema({
  _id: { type: ObjectId },
  userid: { type: ObjectId },
  username: { type: String },
  image: { type: String },
  content: { type: String },
  caption: { type: String },
  comments: { type: Array },
  video: { type: Array },
  createdat: { type: String },
  liked: { type: String },
  isimage: { type: Boolean },
});

module.exports = mongoose.model("moments", momentScheme);
