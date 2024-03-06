const express = require("express");
const router = express.Router();
const userController = require("../../controllers/app/userController");

// http://localhost:3000/api/users/getAllUsers
// lấy tất cả user
router.get("/getAllUsers", async (req, res, next) => {
  try {
    const users = await userController.getAllUsersController();
    return res.status(200).json({ result: true, users: users });
  } catch (error) {
    return res.status(500).json({ result: false, users: null });
  }
});

// login bằng số điện thoại
// http://localhost:3000/api/users/loginWithPhoneNumber
router.post("/loginWithPhoneNumber", async (req, res, next) => {
  try {
    const { phoneNumber, password } = req.body;
    const user = await userController.loginWithPhoneNumberController(
      phoneNumber,
      password
    );
    if (user) {
      return res.status(200).json({ result: true, user: user });
    }
    return res.status(500).json({ result: false, user: null });
  } catch (error) {
    return res
      .status(400)
      .json({ result: false, user: null, error: error.message });
  }
});

// đăng kí tài khoản bằng số điện thoại
// http://localhost:3000/api/users/signUpWithPhoneNumber
router.post("/signUpWithPhoneNumber", async (req, res, next) => {
  try {
    const { phoneNumber, password } = req.body;
    const user = await userController.signUpWithPhoneNumberController(
      phoneNumber,
      password
    );
    if (user) {
      return res.status(200).json({ result: true, user: user });
    }
    return res.status(500).json({ result: false, user: null });
  } catch (error) {
    return res
      .status(400)
      .json({ result: false, user: null, error: error.message });
  }
});

// đăng kí tài khoản bằng số điện thoại
// http://localhost:3000/api/users/getUserById?id=
router.get("/getUserById", async (req, res, next) => {
  try {
    const { id } = req.query;
    const user = await userController.getUserByIdController(id);
    if (user) {
      return res.status(200).json({ result: true, user: user });
    }
    return res.status(500).json({ result: true, user: null });
  } catch (error) {
    return res.status(500).json({ result: false, user: null });
  }
});

module.exports = router;
