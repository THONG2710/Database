const userService = require("../service/userService");

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
module.exports = { getAllUsersController, loginWithPhoneNumberController };
