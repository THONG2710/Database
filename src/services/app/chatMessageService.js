const chatmessageModel = require("../../models/ChatMessageModel");

// lấy tin nhắn của bạn bè theo id
const getChatMessageById = async (id) => {
  try {
    const messages = await chatmessageModel
      .find({ $or: [{ sender: id }, { receiver: id }] })
      .sort({createdat: 1})
      .exec();
    if (messages) {
      return messages;
    }
    return null;
  } catch (error) {
    console.log("get messages failed: " + error.message);
  }
};

module.exports = { getChatMessageById };
