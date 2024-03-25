const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const toDoItemSchema = new Schema({
  id: { type: ObjectId },
  status: { type: Boolean },
  content: { type: String },
  description: { type: String },
  todoid: { type: ObjectId },
});

module.exports = mongoose.model("todoitems", toDoItemSchema);
