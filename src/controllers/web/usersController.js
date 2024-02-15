const usersService = require("../../services/web/usersService");

const getAllUsers = async (req, res) => {
    const users = await usersService.getAllUsers();
    // console.log(users);
    res.render("index.ejs", { users });
  };

  module.exports = {
    getAllUsers,
  };
  