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
const loginWithPhoneNumber = async () => {

};


module.exports = { getAllUsers, loginWithPhoneNumber };
