const notificationService = require("../../services/app/notificationService");

// lấy thông báo theo người dùng
const getNotificationByIdController = async (id) => {
  try {
    return await notificationService.getNotificationsById(id);
  } catch (error) {
    return null;
  }
};

// tạo thông báo mới
const createNewNotificationsController = async (
  receiver,
  sender,
  content,
  createdat,
  moment,
  diary
) => {
  try {
    return notificationService.createNewNotifications(
      receiver,
      sender,
      content,
      createdat,
      moment,
      diary
    );
  } catch (error) {
    return null;
  }
};

module.exports = {
  getNotificationByIdController,
  createNewNotificationsController,
};
