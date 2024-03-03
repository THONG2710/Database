const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const friendSchema = new Schema({
    _id: { type: ObjectId },
    userid: { type: ObjectId },
    friendid: { type: ObjectId },
    requestedAt: { type: String },
    status: { type: Boolean },
  });
  
  module.exports = mongoose.model("friend", friendSchema);