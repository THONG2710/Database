const usersService = require("../../services/web/usersService");
// getAllUsers
const getAllUsers = async (req, res) => {
  const users = await usersService.getAllUsers();
  // console.log(users);
  res.render("index.ejs", { users });
};
// getUserById
const getUserById = async (id) => {
  try {
    const user = await usersService.getUserById(id);
    return user;
  } catch (error) {
    return false;
  }
};
// banUser
const banUser = async (id) => {
  try {
    const user = await usersService.banUser(id);
    return user;
  } catch (error) {
    return error;
  }
};
// get diaries by user id
const getDiariesByUserId = async (id) => {
  try {
    const diaries = await usersService.getDiariesByUserId(id);
    return diaries;
  } catch (error) {
    return error;
  }
};
// get moments by user id
const getMomentsByUserId = async (id) => {
  try {
    const moments = await usersService.getMomentsByUserId(id);
    return moments;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  banUser,
  getDiariesByUserId,
  getMomentsByUserId,
};
