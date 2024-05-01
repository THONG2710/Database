const signInService = require("../../services/web/signInService.js");

const signIn = (req, res) => {
  
  res.render("signin.ejs");
};

const postSignin = async () => {
  return await signInService.signIn();
};

module.exports = {
  signIn,
    postSignin,
};
