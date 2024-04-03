const usersService = require("../../services/web/usersService");
// getAllUsers
const getAllUsers = async (req, res) => {
  const users = await usersService.getAllUsers();
  users.forEach((user) => {
    if (user.createdat) {
      const date = new Date(user.createdat * 1000);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return (user.createdat = `${day}/${month}/${year}`);
    }
  });
  // console.log(users);

  res.render("user/index.ejs", { users });
};
// getUserById
const getUserById = async (id) => {
  try {
    const user = await usersService.getUserById(id);

    if (user.createdat) {
      const date = new Date(user.createdat * 1000);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      user.createdat = `${day}/${month}/${year}`;
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
const getDiariesByUserId = async (id) => {
  try {
    const diaries = await usersService.getDiariesByUserId(id);
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
// get moments by user id
const getMomentsByUserId = async (id) => {
  try {
    const moments = await usersService.getMomentsByUserId(id);
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
module.exports = {
  getAllUsers,
  getUserById,
  banUser,
  getDiariesByUserId,
  getMomentsByUserId,
};
