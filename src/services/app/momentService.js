const momentModel = require("../../models/momentModel");
const FriendModel = require("../../models/friendModel");

// lấy tất cả khoảnh khắc
const getAllMoments = async () => {
  try {
    const moments = await momentModel.find();
    console.log(moments);
    if (moments) {
      return moments;
    }
    return null;
  } catch (error) {
    console.log("get all moments failed ", error);
    return null;
  }
};

//  lấy khoảnh khắc theo người dùng
const getMomentById = async (id) => {
  try {
    const moments = await momentModel.find({ userid: id }).exec();
    if (moments) {
      return moments;
    }
    return null;
  } catch (error) {
    console.log("get moment by userid failled: " + error.message);
  }
};

// đăng khoảnh khắc
const createMoment = async (userid, createdat, content, caption, description) => {
  try {
    const moment = {
      userid: userid,
      createdat: createdat,
      content: content,
      caption: caption,
      description: description
    };
    const newMoment = new momentModel(moment);
    const create = await newMoment.save();
    if (create) {
      console.log(create);
      return create;
    }
    return null;
  } catch (error) {
    console.log("Error creating moment: " + error.message);
  }
};

// xóa một khoảnh khắc
const deleteMoment = async (id) => {
  try {
    const res = await momentModel.deleteOne({ _id: id });
    if (res) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Error deleting moment: " + error.message);
  }
};

// lấy khoảnh khắc của bạn bè
const getFriendsMoment = async (id) => {
  try {
    const friends = await FriendModel.find({ userid: id, status: 3 }).exec();
    const friendsMoments = [];
    if (friends) {
      for (const friend of friends) {
        const moment = await momentModel
          .find({ userid: friend.friendid })
          .exec();
        friendsMoments.push(...moment);
      }
      console.log(friendsMoments);
      return friendsMoments;
    }
    return null;
  } catch (error) {
    console.log("Failed to find friend moment: " + error.message);
  }
};

module.exports = {
  getAllMoments,
  getMomentById,
  createMoment,
  deleteMoment,
  getFriendsMoment,
};
