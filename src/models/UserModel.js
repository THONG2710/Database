const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    _id: { type: ObjectId },
    password: { type: String },
    email: { type: String },
    friend: { type: Array },
    role: { type: String },
    isLooked : { type: Boolean },
    time_create: { type: Date },
    friend_request: { type: Array },
    request_to_be_friend: { type: Array },
});

module.exports = mongoose.model('users', userSchema);