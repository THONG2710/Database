const notificationsModel = require("../../models/notificationModel");

// lấy thông báo theo người dùng
const getNotificationsById = async (id) => {
  try {
    const notis = await notificationsModel.find({ receiver: id });
    if (notis.length > 0) {
      return notis;
    }
    return null;
  } catch (error) {
    console.log("failed to get notifications: " + error.message);
  }
};

// tạo thông báo mới
const createNewNotifications = async (
  receiver,
  sender,
  content,
  createdat,
  moment,
  diary
) => {
  try {
    const noti = {
      receiver: receiver,
      sender: sender,
      content: content,
      createdat: createdat,
      moment: moment,
      diary: diary,
    };
    const newNoti = new notificationsModel(noti);
    const res = await newNoti.save();
    if (res) {
      return res;
    }
    return null;
  } catch (error) {
    console.log("failed to create notification: " + error);
  }
};

module.exports = { getNotificationsById, createNewNotifications };
