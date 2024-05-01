const userModel = require("../../models/UserModel");
const signIn = async () => {
    try {
      const user = await userModel.findOne({ email: 'admin@gmail.com' });
      // console.log(user);
      if (user && user.password === 'admin123') {
        return user;
      }
    } catch (error) {
      console.log("Sign in error: " + error);
      throw error;
    }
    return false;
  };

  module.exports = { signIn };