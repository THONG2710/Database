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
  seen,
  isimage
) => {
  try {
    return await chatMessageService.senMessage(
      receiver,
      content,
      createdat,
      sender,
      seen,
      isimage
    );
  } catch (error) {
    return null;
  }
};

//  lấy tin nhắn mới nhất
const getNewMessageController = async (id) => {
  try {
    return await chatMessageService.getNewMessage(id);
  } catch (error) {
    return null;
  }
};

module.exports = {
  getMessageByIdController,
  sendMessageController,
  getNewMessageController,
};
