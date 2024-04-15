const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const notificationSchema = new Schema({
  id: { type: ObjectId },
  receiver: { type: ObjectId, require: false },
  sender: { type: ObjectId },
  content: { type: String },
  createdat: { type: Number },
  moment: { type: ObjectId, require: false },
  diary: { type: ObjectId, require: false },
});

module.exports = mongoose.model("notifications", notificationSchema);
