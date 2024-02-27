const userModel = require("../../models/UserModel");
const signIn = async (email, password) => {
    try {
      const user = await userModel.findOne({ email: email });
      // console.log(user);
      if (user && user.password === password && user.role == 1) {
        return user;
      }
    } catch (error) {
      console.log("Sign in error: " + error);
      throw error;
    }
    return false;
  };

  module.exports = { signIn };