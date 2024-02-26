const userModel = require("../model/userModel");
const urlAvatarDefault = "https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png";

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

// đăng kí tài khoản bằng số điện thoại
const signUpWithPhoneNumber = async (phoneNumber, password) => {
  try {
    const isAvailable = await userModel.findOne({ phoneNumber: phoneNumber }).exec();
    if (isAvailable) {
      console.log(phoneNumber + " already exists!!");
      return false;
    } else {
      const user = {
        userName: "",
        password: password,
        Email: "",
        Available: true,
        Avatar: urlAvatarDefault,
        phoneNumber: phoneNumber,
      };
      const newUser = new userModel(user);
      const createUser = await newUser.save();
      return createUser;
    }
  } catch (error) {
    console.log("create user error: " + error);
    return null;
  }
};

module.exports = { getAllUsers, loginWithPhoneNumber, signUpWithPhoneNumber };
