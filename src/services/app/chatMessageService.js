const { ObjectId } = require("mongodb");
const chatmessageModel = require("../../models/ChatMessageModel");
const UserModel = require("../../models/UserModel");
const friendModel = require("../../models/friendModel");

// lấy tin nhắn của bạn bè theo id
const getChatMessageById = async (id) => {
  try {
    const messages = await chatmessageModel
      .find({ $or: [{ sender: id }, { receiver: id }] })
      .sort({ createdat: 1 })
      .exec();
    if (messages) {
      return messages;
    }
    return null;
  } catch (error) {
    console.log("get messages failed: " + error.message);
  }
};

// gửi tin nhắn
const senMessage = async (receiver, content, createdat, sender, seen, isimage) => {
  try {
    const message = {
      receiver: receiver,
      content: content,
      createdat: parseFloat(createdat),
      sender: sender,
      seen: seen,
      isimage: isimage,
    };
    const newMessage = new chatmessageModel(message);
    const res = await newMessage.save();
    if (res) {
      return res;
    }
  } catch (error) {
    console.log("failed to save message: " + error.message);
  }
};

// lấy tin nhắn mới nhất
const getNewMessage = async (id) => {
  try {
    const friends = await friendModel.find({
      $or: [{ userid: id }, { friendid: id }],
      status: 3,
    });
    const listData = [];
    for (const friend of friends) {
      const infor = await UserModel.findOne({
        $or: [{ _id: friend.friendid }, { _id: friend.userid }],
        _id: { $ne: id },
      });

      const message = await chatmessageModel
        .find({
          $or: [
            { sender: id, receiver: infor._id },
            { sender: infor._id, receiver: id },
          ],
        })
        .sort({ createdat: -1 });
      const data = { friend: infor, message: message[0] };
      listData.push(data);
    }
    return listData;
  } catch (error) {
    console.log("failed to get new message: ", error.message);
  }
};

module.exports = { getChatMessageById, senMessage, getNewMessage };
