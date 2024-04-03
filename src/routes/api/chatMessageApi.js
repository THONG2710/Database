const express = require("express");
const router = express.Router();
const chatMessageController = require("../../controllers/app/chatMessageController");

//  lấy tin nhắn theo id người dùng
// http://localhost:3000/api/chatMessage/getMessageById?id=
router.get("/getMessageById", async (req, res, next) => {
  try {
    const { id } = req.query;
    const messages = await chatMessageController.getMessageByIdController(id);
    if (messages) {
      return res.status(200).json({ result: true, messages: messages });
    }
    return res.status(500).json({ result: false, messages: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
});

//  gửi tin nhắn
// http://localhost:3000/api/chatMessage/sendMessage
router.post("/sendMessage", async (req, res, next) => {
  try {
    const { receiver, content, createdat, sender, seen, isimage } = req.body;
    const messages = await chatMessageController.sendMessageController(
      receiver,
      content,
      createdat,
      sender,
      seen,
      isimage
    );
    if (messages) {
      return res.status(200).json({ result: true, messages: messages });
    }
    return res.status(500).json({ result: false, messages: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
});

//  lấy tin nhắn mới nhất
// http://localhost:3000/api/chatMessage/getNewMessages/
router.get("/getNewMessages/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const messages = await chatMessageController.getNewMessageController(id);
    if (messages) {
      return res.status(200).json({ result: true, messages: messages });
    }
    return res.status(500).json({ result: false, messages: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
});

module.exports = router;
