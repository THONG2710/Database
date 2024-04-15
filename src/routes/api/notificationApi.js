const express = require("express");
const router = express.Router();
const notificationsController = require("../../controllers/app/notificationController");

// lấy  thông báo theo người dùng
// http://localhost:3000/api/notifications/getNotificationsById
router.get("/getNotificationsById/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const notis = await notificationsController.getNotificationByIdController(
      id
    );
    if (notis) {
      return res.status(200).json({ result: true, notis: notis });
    }
    return res.status(200).json({ result: false, notis: null });
  } catch (error) {
    return res.status(200).json({ result: false, error: error.message });
  }
});

// lấy  thông báo theo người dùng
// http://localhost:3000/api/notifications/createNewNotification
router.post("/createNewNotification", async (req, res, next) => {
  try {
    const { receiver, sender, content, createdat, moment, diary } = req.body;
    const notis =
      await notificationsController.createNewNotificationsController(
        receiver,
        sender,
        content,
        createdat,
        moment,
        diary
      );
    if (notis) {
      return res.status(200).json({ result: true, notis: notis });
    }
    return res.status(200).json({ result: false, notis: null });
  } catch (error) {
    return res.status(200).json({ result: false, error: error.message });
  }
});

module.exports = router;
