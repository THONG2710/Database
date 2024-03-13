const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const momentScheme = new Schema({
  id: { type: ObjectId },
  userid: { type: ObjectId },
  content: { type: String },
  caption: { type: String },
  createdat: { type: Number },
  description: { type: String },
});

module.exports = mongoose.model("moments", momentScheme);
