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

// đăng nhập
const loginWithPhoneNumber = async (phoneNumber, password) => {
  try {
    const user = await userModel.findOne({ phonenumber: phoneNumber });
    if (user && user.password === password) {
      return user;
    }
    return null;
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
      _id: {$ne: id}
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
      _id: {$ne: id}
    });
    if (user) {
      return user;
    }
    return null;
  } catch (error) {
    console.log("failed to find user by username: " + error.message);
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
};
