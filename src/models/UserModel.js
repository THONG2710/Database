const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    _id: { type: ObjectId },
    password: { type: String },
    fullName: { type: String },
    email: { type: String },
    address: { type: String },
    cccd: { type: String},
    phoneNumber: { type: String },
    score: { type: Number },
    role: { type: Number },
    gender: { type: Number },
    avatar: { type: String },
});

module.exports = mongoose.model('users', userSchema);