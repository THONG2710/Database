const friendModel = require("../../models/friendModel");
const UserModel = require("../../models/UserModel");

// lấy tất cả bạn
const getAllFriend = async () => {
  try {
    const friends = await friendModel.find();
    if (friends) {
      return friends;
    }
    return null;
  } catch (error) {
    console.log("Failed to find friend: " + error.message);
    return null;
  }
};

//  lấy số lượn bạn bạn bè theo người dùng
const getFriendsById = async (id) => {
  try {
    const friends = await friendModel.find({ userid: id, status: 3 }).exec();
    if (friends) {
      return friends;
    }
    return null;
  } catch (error) {
    console.log("Failed to find friend: " + error.message);
  }
};

//  lấy thông tin bạn bè theo id người dùng
const getInformationFriendsById = async (id) => {
  try {
    const friends = await friendModel.find({ $or: [{userid: id}], status: 3 }).exec();
    console.log(friends);
    const inforFriends = [];
    if (friends) {
      for (const friend of friends) {
        const inforFriend = await UserModel.findById(friend.friendid);
        inforFriends.push(inforFriend);
      }
      return inforFriends;
    }
    return null;
  } catch (error) {
    console.log("get information about friend failed: " + error.message);
  }
};

//  lấy danh sách người lạ mình đã gửi yêu cầu
const getUsersSentRequest = async (id) => {
  try {
    const friends = await friendModel.find({ userid: id, status: 2 }).exec();
    const listRequest = [];
    for (const friend of friends) {
      const user = await UserModel.findById(friend.friendid).exec();
      const res = { user, friend };
      listRequest.push(res);
    }
    if (listRequest) {
      return listRequest;
    }
  } catch (error) {
    console.log("Failed to find users : " + error.message);
  }
};

//  lấy danh sách người lạ
const getUsers = async (id) => {
  try {
    const friends = await friendModel.distinct("friendid", {
      userid: id,
      status: { $in: [2, 3] },
    });
    const users = await UserModel.find({
      $and: [{ _id: { $ne: id } }, { _id: { $nin: friends } }],
    });
    if (users) {
      return users;
    }
  } catch (error) {
    console.log("failed to get users: " + error.message);
  }
};

// kết bạn
const addFriend = async (userid, friendid, requestedat, status) => {
  try {
    const request = {
      userid: userid,
      friendid: friendid,
      requestedat: requestedat,
      status: status,
    };
    const newRequest = new friendModel(request);
    const res = await newRequest.save();
    if (res) {
      return res;
    }
  } catch (error) {
    console.log("Failed to add friend : " + error.message);
  }
};

// hủy yêu cầu kết bạn
const cancelRequest = async (idRequest) => {
  try {
    const result = await friendModel.updateOne(
      { _id: idRequest },
      { $set: { status: 1 } }
    );
    if (result) {
      return result;
    }
    return null;
  } catch (error) {
    console.log("Failed to cancel request : " + error.message);
  }
};

//  lấy danh sách người lạ đã gửi yêu cầu cho mình
const getUsersRequest = async (id) => {
  try {
    const friends = await friendModel.find({ friendid: id, status: 2 }).exec();
    const users = [];
    if (friends) {
      for (const friend of friends) {
        const user = await UserModel.findById(friend.userid);
        const res = {user, friend}
        users.push(res);
      }
      return users;
    }
    return [];
  } catch (error) {
    console.log("failed to find user request to me " + error);
  }
};

// chấp nhận lời mời kết bạn
const AcceptRequest = async (id) => {
  try {
    const result = await friendModel.updateOne(
      { _id: id },
      { $set: { status: 3 } }
    );
    if (result) {
      return result;
    }
    return null;
  } catch (error) {
    console.log("Failed to accept request: " + error.message);
  }
}

module.exports = {
  getAllFriend,
  getFriendsById,
  getInformationFriendsById,
  getUsersSentRequest,
  getUsers,
  addFriend,
  cancelRequest,
  getUsersRequest,
  AcceptRequest
};
