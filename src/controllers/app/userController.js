const UserService = require("../../services/app/userService");

const login = async (email, password) => {
  try {
    return await UserService.loginApp(email, password);
  } catch (error) {
    console.log("login error: ", error);
  }
};

const SignUp = async (email, password) => {
  try {
    return await UserService.signUp(email, password);
  } catch (error) {
    console.log("sign up error: " + error);
  }
};

const getTourByUser = async (id) => {
  try {
    return await UserService.getTourByUser(id);
  } catch (error) {
    console.log("get tour by user error: " + error);
  }
};

const getUserByIdController = async (id) => {
  try {
    return await UserService.getUserById(id);
  } catch (error) {
    console.log('get user by user controller error: ' + error);
  }
}

const getPostByIdUserController = async (id) => {
  try {
    return await UserService.getPostByIdUser(id);
  } catch (error) {
    console.log('get post by user controller error: ' + error);
  }
};

module.exports = { login, SignUp, getTourByUser, getUserByIdController, getPostByIdUserController };
