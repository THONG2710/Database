const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
  id: { type: ObjectId },
  username: { type: String },
  password: { type: String },
  email: { type: String },
  available: { type: Boolean },
  avatar: { type: String },
  phonenumber: { type: String },
  createdAt: { type: String },
  role: { type: Number },
});

module.exports = mongoose.model("user", userSchema);
