const usersService = require("../../services/web/usersService");
// getAllUsers
const getAllUsers = async (req, res) => {
  const page = req.query.page || 1;
  const users = await usersService.getAllUsers(page);
  const numberOfPages = await usersService.getAllUsersPage();
  users.forEach((user) => {
    if (user.createdAt) {
      const date = new Date(user.createdAt * 1000);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return (user.createdAt = `${day}/${month}/${year}`);
    }
  });

  res.render("user/index.ejs", { users, numberOfPages, page });
};
// getUserById
const getUserById = async (id) => {
  try {
    const user = await usersService.getUserById(id);

    if (user.createdAt) {
      const date = new Date(user.createdAt * 1000);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      user.createdAt = `${day}/${month}/${year}`;
    }
    
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
const getDiariesByUserId = async (id, page) => {
  try {
    const diaries = await usersService.getDiariesByUserId(id, page);
    diaries.forEach((diary) => {
      if (diary.createdat) {
        const date = new Date(diary.createdat * 1000);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        diary.createdat = `${day}/${month}/${year}`;
      }
    });

    return diaries;
  } catch (error) {
    return error;
  }
};

// get page diaries by user id
const getDiariesByUserIdPage = async (id) => {
  try {
    const result = await usersService.getDiariesByUserIdPage(id);
    return result;
  } catch (error) {
    return error;
  }
};

// get moments by user id
const getMomentsByUserId = async (id, page) => {
  try {
    const moments = await usersService.getMomentsByUserId(id, page);
    moments.forEach((moment) => {
      if (moment.createdat) {
        const date = new Date(moment.createdat * 1000);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        moment.createdat = `${day}/${month}/${year}`;
      }
    });
    return moments;
  } catch (error) {
    return error;
  }
};

// get page moments by user id
const getMomentsByUserIdPage = async (id) => {
  try {
    const result = await usersService.getMomentsByUserIdPage(id);
    return result;
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
  getDiariesByUserIdPage,
  getMomentsByUserIdPage,
};
