const userService = require("../../services/app/userService");

const getAllUsersController = async () => {
  try {
    const users = await userService.getAllUsers();
    return users;
  } catch (error) {
    return null;
  }
};

const loginWithPhoneNumberController = async (phoneNumber, password) => {
  try {
    return await userService.loginWithPhoneNumber(phoneNumber, password);
  } catch (error) {
    return null;
  }
};

const signUpWithPhoneNumberController = async (phoneNumber, password) => {
  try {
    return await userService.signUpWithPhoneNumber(phoneNumber, password);
  } catch (error) {
    return null;
  }
};

const getUserByIdController = async (id) => {
  try {
    return await userService.getUserById(id);
  } catch (error) {
    return null;
  }
};

// cập nhật thông tin tài khoản
const updateUser = async (id, username, email, avatar, phonenumber) => {
  try {
    return await userService.updateUser(
      id,
      username,
      email,
      avatar,
      phonenumber
    );
  } catch (error) {
    return null;
  }
};

// tìm kiếm người dùng bằng tên
const findUserByNameController = async (name, id) => {
  try {
    return await userService.findUserByName(name, id);
  } catch (error) {
    return null;
  }
};

// tìm kiếm người dùng bằng số điện thoại
const findUserByPhoneNumberController = async (phoneNumber, id) => {
  try {
    return await userService.findUserByPhoneNumber(phoneNumber, id);
  } catch (error) {
    return null;
  }
};

// đăng kí tài khoản
const register = async (
  username,
  password,
  email,
  avatar,
  phonenumber,
  createdat
) => {
  try {
    const res = await userService.register(
      username,
      password,
      email,
      avatar,
      phonenumber,
      createdat
    );
    console.log(res);
    return res;
  } catch (error) {
    return null;
  }
};

// kiểm tra tài khoản
const checkIsAvailableAccountController = async (email) => {
  try {
    return await userService.checkIsAvailableAccount(email);
  } catch (error) {
    return null;
  }
};

// lấy tài khoản bằng email
const getAccountByEmailController = async (email) => {
  try {
    return await userService.getAccountByEmail(email);
  } catch (error) {
    return null;
  }
};

module.exports = {
  getAllUsersController,
  loginWithPhoneNumberController,
  signUpWithPhoneNumberController,
  getUserByIdController,
  updateUser,
  findUserByNameController,
  findUserByPhoneNumberController,
  register,
  checkIsAvailableAccountController,
  getAccountByEmailController,
};
