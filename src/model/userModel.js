const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
  id: { type: ObjectId },
  userName: { type: String },
  password: { type: String },
  Email: { type: String },
  Available: { type: Boolean },
  Avatar: { type: String },
});

module.exports = mongoose.model("user", userSchema);
