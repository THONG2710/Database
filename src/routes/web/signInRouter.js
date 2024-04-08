const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {
  postSignin,
  signIn,
} = require("../../controllers/web/signInController");
const { checkTokenWeb } = require("../../middleware/authen");

router.get("/signin", [checkTokenWeb], signIn);

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const result = await postSignin(email, password);
  // console.log(result);

  if (result) {
    // tao token jwt
    // luu token vao session
    // console.log(result);
    const token = jwt.sign({ _id: result._id, role: result.role }, "secret", {
      expiresIn: "1h",
    });
    // console.log(role);
    req.session.token = token;
    console.log("Sign in successfully!");
    res.redirect("/");
  } else {
    console.log("Sign in failed!");
    res.redirect("/signin");
  }
});

//http://localhost:3000/signout
router.get("/signout", [checkTokenWeb], (req, res) => {
  //xu li logout
  // xoa token trong session
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/signin");
    }
  });
});

module.exports = router;
