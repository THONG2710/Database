const userService = require("../service/userService");

const getAllUsersController = async () => {
  try {
    const users = await userService.getAllUsers();
    return users;
  } catch (error) {
    return null;
  }
};

module.exports = { getAllUsersController };
