const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const chatMessageSchema = new Schema({
  id: { type: ObjectId },
  receiver: { type: ObjectId },
  content: { type: String },
  createdat: { type: Number },
  sender: { type: ObjectId },
  seen: { type: Boolean },
});

module.exports = mongoose.model("chatmessage", chatMessageSchema);
