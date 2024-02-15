const userModel = require("../../models/userModel");

const getAllUsers = async () => {
    try {
      return await userModel.find();
    } catch (error) {
      return error;
    }
  };
  module.exports = { getAllUsers };