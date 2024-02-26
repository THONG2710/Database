const express = require("express");
const router = express.Router();
const userController = require("../../controller/userController");

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

module.exports = router;
