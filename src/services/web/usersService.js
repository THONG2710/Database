const diaryModel = require("../../models/diaryModel");
const userModel = require("../../models/UserModel");
const momentModel = require("../../models/momentModel");

// getAllUsers
const getAllUsers = async (page) => {
  try {
    return await userModel
      .find()
      .limit(6)
      .skip((page - 1) * 10)
      .sort({ createdAt: -1 });
  } catch (error) {
    return error;
  }
};

//lay page
const getAllUsersPage = async () => {
  try {
    const result = await userModel.countDocuments();
    const numberOfPages = Math.ceil(result / 10);
    return numberOfPages;
  } catch (error) {
    return error;
  }
};

// getUserById
const getUserById = async (id) => {
  try {
    // console.log(id);
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
      user.available = !user.available;
    }
    return await user.save();
  } catch (error) {
    return error;
  }
};
// get diaries by user id
const getDiariesByUserId = async (id) => {
  try {
    return await diaryModel
      .find({ userid: id })
      .limit(10)
      .sort({ createdat: -1 })
      .sort({ createdat: -1 });
  } catch (error) {
    return error;
  }
};

// get page diaries by user id
const getDiariesByUserIdPage = async (id) => {
  try {
    const result = await diaryModel.countDocuments({ userid: id });
    const numberOfPages = Math.ceil(result / 10);
    return numberOfPages;
  } catch (error) {
    return error;
  }
};

// get moments by user id
const getMomentsByUserId = async (id, page) => {
  try {
    return await momentModel
      .find({ userid: id })
      .limit(10)
      .skip((page - 1) * 10)
      .sort({ createdat: -1 });
  } catch (error) {
    return error;
  }
};

// get page moments by user id
const getMomentsByUserIdPage = async (id) => {
  try {
    const result = await momentModel.countDocuments({ userid: id });
    const numberOfPages = Math.ceil(result / 10);
    return numberOfPages;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllUsers,
  getAllUsersPage,
  getUserById,
  banUser,
  getDiariesByUserId,
  getMomentsByUserId,
  getDiariesByUserIdPage,
  getMomentsByUserIdPage,
};
