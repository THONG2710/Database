const signInService = require("../../services/web/signInService.js");

const signIn = (req, res) => {
  
  res.render("signin.ejs");
};

const postSignin = async (email, password) => {
  return await signInService.signIn(email, password);
};

module.exports = {
  signIn,
    postSignin,
};
