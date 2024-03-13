const chatMessageService = require('../../services/app/chatMessageService');

// lấy tin nhắn với bạn bè bằng id
const getMessageByIdController = async (id) => {
    try {
        return chatMessageService.getChatMessageById(id);
    } catch (error) {
        return null;
    }
}

module.exports = {getMessageByIdController}