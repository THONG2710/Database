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
const createMoment = async (
  userid,
  createdat,
  content,
  caption,
  description,
  isimage
) => {
  try {
    const moment = {
      userid: userid,
      createdat: createdat,
      content: content,
      caption: caption,
      description: description,
      isimage: isimage,
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
    const friends = await FriendModel.find({
      $or: [{ userid: id }, { friendid: id }],
      status: 3,
    }).exec();
    const friendsMoments = [];
    console.log(friends);
    if (friends) {
      for (const friend of friends) {
        const id1 = friend.friendid;
        const id2 = friend.userid;
        const moment = await momentModel
          .find({
            $and: [{ userid: { $in: [id1, id2] } }, { userid: { $ne: id } }],
          })
          .exec();
        friendsMoments.push(...moment);
      }
      const sortFriendsMoments = friendsMoments.sort(
        (a, b) => b.createdat - a.createdat
      );
      console.log(sortFriendsMoments.length);
      return sortFriendsMoments;
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
