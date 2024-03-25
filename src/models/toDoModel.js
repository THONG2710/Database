const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const toDoSchema = new Schema({
  id: { type: ObjectId },
  userid: { type: ObjectId},
  createdat: { type: Number},
});

module.exports = mongoose.model("todos", toDoSchema);
