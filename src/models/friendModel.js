const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const friendSchema = new Schema({
    id: { type: ObjectId },
    userid: { type: ObjectId },
    friendid: { type: ObjectId },
    requestedat: { type: String },
    status: { type: Number },
  });
  
  module.exports = mongoose.model("friend", friendSchema);