const UserModel = require("../../models/UserModel");
const userModel = require("../../models/UserModel");
const urlAvatarDefault =
  "https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png";

// lất tất cả danh sách người dùng
const getAllUsers = async () => {
  try {
    const user = await userModel.find();
    return user;
  } catch (error) {
    return null;
  }
};

// đăng nhập bằng số đt
const loginWithPhoneNumber = async (phoneNumber, password) => {
  try {
    const user = await userModel.find({
      phonenumber: phoneNumber,
      password: password,
    });
    if (user.length > 0) {
      return user;
    } else {
      return [
        {
          _id: "",
          username: "",
          password: "",
          email: "",
          available: false,
          avatar: "",
          phonenumber: "",
          createdAt: "",
        },
      ];
    }
  } catch (error) {
    console.log("login with phone number failed, error:", error);
    return null;
  }
};

// đăng kí tài khoản bằng số điện thoại
const signUpWithPhoneNumber = async (phoneNumber, password) => {
  try {
    const isAvailable = await userModel
      .findOne({ phonenumber: phoneNumber })
      .exec();
    if (isAvailable) {
      console.log(phoneNumber + " already exists!!");
      return null;
    } else {
      const user = {
        userName: "",
        password: password,
        Email: "",
        Available: true,
        Avatar: urlAvatarDefault,
        phoneNumber: phoneNumber,
      };
      const newUser = new userModel(user);
      const createUser = await newUser.save();
      return createUser;
    }
  } catch (error) {
    console.log("create user error: " + error);
    return null;
  }
};

// lấy thông tin người dung theo id
const getUserById = async (id) => {
  try {
    const user = await userModel.findById(id);
    if (user) {
      return user;
    }
    return null;
  } catch (error) {
    console.log("get user by id failled: " + error.message);
    return null;
  }
};

// cập nhật tài khoản
const updateUser = async (id, username, email, avatar, phonenumber) => {
  try {
    const user = await userModel.findById(id);
    if (user) {
      user.username = username ? username : user.username;
      user.email = email ? email : user.email;
      user.avatar = avatar ? avatar : user.avatar;
      user.phonenumber = phonenumber ? phonenumber : user.phonenumber;
      await user.save();
      return user;
    }
    return null;
  } catch (error) {
    console.log("failed to update user: ", error.message);
  }
};

// tìm kiếm người dùng bằng tên
const findUserByName = async (name, id) => {
  try {
    const user = await userModel.find({
      username: { $regex: name, $options: "i" },
      _id: { $ne: id },
    });
    if (user) {
      return user;
    }
    return null;
  } catch (error) {
    console.log("failed to find user by name: " + error.message);
  }
};

// tìm kiếm bằng số điện thoại
const findUserByPhoneNumber = async (phoneNumber, id) => {
  try {
    const user = await userModel.find({
      phonenumber: { $regex: phoneNumber, $options: "i" },
      _id: { $ne: id },
    });
    if (user) {
      return user;
    }
    return null;
  } catch (error) {
    console.log("failed to find user by username: " + error.message);
  }
};

// đăng kí tài khoản
const register = async (
  username,
  password,
  email,
  avatar,
  phonenumber,
  createdat
) => {
  try {
    const checkPassword = await userModel.find({
      password: password,
    });
    if (password.length == 0) {
      const user = {
        username: username,
        password: password,
        email: email,
        available: true,
        avatar: avatar,
        phonenumber: phonenumber,
        createdAt: createdat,
      };
      const newUser = new UserModel(user);
      const res = await newUser.save();
      if (res) {
        return res;
      }
    } else {
      if (checkPassword.length > 0) {
        return { response: "Mật khẩu đã có người sử dụng" };
      }
      if (checkPassword.length <= 0) {
        const user = {
          username: username,
          password: password,
          email: email,
          available: true,
          avatar: avatar,
          phonenumber: phonenumber,
          createdAt: createdat,
        };
        const newUser = new UserModel(user);
        const res = await newUser.save();
        if (res) {
          return res;
        }
      }
    }
    return null;
  } catch (error) {
    console.log("failed to save user: ", error);
  }
};

// kiểm tra tài khoản đã tồn tại hay chưa
const checkIsAvailableAccount = async (email) => {
  try {
    const users = await userModel.find({ email: email });
    if (users.length > 0) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("failed to find user: ", error);
  }
};

// lấy tài khoản bằng email
const getAccountByEmail = async (email) => {
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      return user;
    }
    return null;
  } catch (error) {
    console.log("failed to find user: ", error);
  }
};

module.exports = {
  getAllUsers,
  loginWithPhoneNumber,
  signUpWithPhoneNumber,
  getUserById,
  updateUser,
  findUserByName,
  findUserByPhoneNumber,
  register,
  checkIsAvailableAccount,
  getAccountByEmail,
};
