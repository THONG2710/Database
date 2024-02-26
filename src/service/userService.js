const userModel = require("../model/userModel");

// lất tất cả danh sách người dùng
const getAllUsers = async () => {
  try {
    const user = await userModel.find();
    return user;
  } catch (error) {
    return null;
  }
};

// đăng nhập
const loginWithPhoneNumber = async (phoneNumber, password) => {
  try {
    const user = await userModel.findOne({ phoneNumber: phoneNumber });
    if (user && user.password === password) {
      return user;
    } 
    return null;
  } catch (error) {
    console.log("login with phone number failed, error:", error);
    return null;
  }
};

module.exports = { getAllUsers, loginWithPhoneNumber };
