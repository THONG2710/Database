const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const reportSchema = new Schema({
  id: { type: ObjectId },
  id_diary: { type: ObjectId },
  id_user: { type: ObjectId },
  time_created: { type: Number },
  reason: { type: String },
  status: { type: String },
});

module.exports = mongoose.model("reports", reportSchema);
