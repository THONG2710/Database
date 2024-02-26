const diaryModel = require("../../models/diaryModel");
const userModel = require("../../models/userModel");
const momentModel = require("../../models/momentModel");

// getAllUsers
const getAllUsers = async () => {
  try {
    return await userModel.find();
  } catch (error) {
    return error;
  }
};
// getUserById
const getUserById = async (id) => {
  try {
    console.log(id);
    const user = await userModel.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    return false;
  }
};
// banUser
const banUser = async (id) => {
  try {
    const user = await userModel.findById(id);
    if (user) {
      user.isLooked = !user.isLooked;
    }
    return await user.save();
  } catch (error) {
    return error;
  }
};
// get diaries by user id
const getDiariesByUserId = async (id) => {
  try {
    return await diaryModel.find({ id_user: id });
  }
  catch (error) {
    return error;
  }
}
// get moments by user id
const getMomentsByUserId = async (id) => {
  try {
    return await momentModel.find({ id_user: id });
  }
  catch (error) {
    return error;
  }
}
module.exports = {
  getAllUsers,
  getUserById,
  banUser,
  getDiariesByUserId,
  getMomentsByUserId,
};
