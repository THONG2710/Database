const chatmessageModel = require("../../models/ChatMessageModel");

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
const senMessage = async (receiver, content, createdat, sender, seen) => {
  try {
    const message = {
      receiver: receiver,
      content: content,
      createdat: createdat,
      sender: sender,
      seen: seen,
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

module.exports = { getChatMessageById, senMessage };
