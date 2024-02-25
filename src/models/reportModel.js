const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const reportSchema = new Schema({
  _id: { type: ObjectId },
  id_diary: { type: String },
  id_user: { type: String },
  time_created: { type: String },
  reason: { type: String },
  status: { type: String },
});

module.exports = mongoose.model("reports", reportSchema);
