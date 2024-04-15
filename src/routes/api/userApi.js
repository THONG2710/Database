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

// lấy thông tin người dùng theo id
// http://localhost:3000/api/users/getUserById?id=
router.get("/getUserById", async (req, res, next) => {
  try {
    const { id } = req.query;
    const user = await userController.getUserByIdController(id);
    if (user) {
      return res.status(200).json({ result: true, user: user });
    }
    return res.status(500).json({ result: false, user: null });
  } catch (error) {
    return res.status(500).json({ result: false, user: null });
  }
});

// cập nhật thông tin toàn khoản
// http://localhost:3000/api/users/updateUser
router.post("/updateUser", async (req, res, next) => {
  try {
    const { id, username, email, avatar, phonenumber } = req.body;
    const user = await userController.updateUser(
      id,
      username,
      email,
      avatar,
      phonenumber
    );
    if (user) {
      return res.status(200).json({ result: true, user: user });
    }
    return res.status(500).json({ result: false, user: null });
  } catch (error) {
    return res.status(500).json({ result: false, user: null });
  }
});

// tìm kiếm người dùng bằng tên
// http://localhost:3000/api/users/findUserByName?name=&id=
router.get("/findUserByName", async (req, res, next) => {
  try {
    const { name, id } = req.query;
    const user = await userController.findUserByNameController(name, id);
    if (user) {
      return res.status(200).json({ result: true, user: user });
    }
    return res.status(500).json({ result: false, user: null });
  } catch (error) {
    return res.status(500).json({ result: false, user: null });
  }
});

// tìm kiếm người dùng bằng số điện thoại
// http://localhost:3000/api/users/findUserByPhoneNumber?phoneNumber=&id=
router.get("/findUserByPhoneNumber", async (req, res, next) => {
  try {
    const { phoneNumber, id } = req.query;
    const user = await userController.findUserByPhoneNumberController(
      phoneNumber,
      id
    );
    if (user) {
      return res.status(200).json({ result: true, user: user });
    }
    return res.status(500).json({ result: false, user: null });
  } catch (error) {
    return res.status(500).json({ result: false, user: null });
  }
});

// đăng kí tài khoản
// http://localhost:3000/api/users/register
router.post("/register", async (req, res, next) => {
  try {
    const { username, password, email, avatar, phonenumber, createdat } =
      req.body;
    const user = await userController.register(
      username,
      password,
      email,
      avatar,
      phonenumber,
      createdat
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

// kiểm tra tài khoản
// http://localhost:3000/api/users/checkEmail?email=
router.get("/checkEmail", async (req, res, next) => {
  try {
    const { email } = req.query;
    const response = await userController.checkIsAvailableAccountController(
      email
    );
    if (response) {
      return res.status(200).json({ result: true, user: response });
    }
    return res.status(200).json({ result: true, user: response });
  } catch (error) {
    return res
      .status(400)
      .json({ result: false, user: null, error: error.message });
  }
});

// lấy tài khoản bẳng email
// http://localhost:3000/api/users/getAccountByEmail?email=
router.get("/getAccountByEmail", async (req, res, next) => {
  try {
    const { email } = req.query;
    const response = await userController.getAccountByEmailController(email);
    if (response) {
      return res.status(200).json({ result: true, user: response });
    }
    return res.status(500).json({ result: false, user: null });
  } catch (error) {
    return res
      .status(400)
      .json({ result: false, user: null, error: error.message });
  }
});

module.exports = router;
