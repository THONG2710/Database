const chatMessageService = require("../../services/app/chatMessageService");

// lấy tin nhắn với bạn bè bằng id
const getMessageByIdController = async (id) => {
  try {
    return chatMessageService.getChatMessageById(id);
  } catch (error) {
    return null;
  }
};

// gửi tin nhắn
const sendMessageController = async (
  receiver,
  content,
  createdat,
  sender,
  seen
) => {
  try {
    return await chatMessageService.senMessage(
      receiver,
      content,
      createdat,
      sender,
      seen
    );
  } catch (error) {
    return null;
  }
};

module.exports = { getMessageByIdController, sendMessageController };
