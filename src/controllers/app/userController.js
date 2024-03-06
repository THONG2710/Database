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

module.exports = {
  getAllUsersController,
  loginWithPhoneNumberController,
  signUpWithPhoneNumberController,
  getUserByIdController,
};
