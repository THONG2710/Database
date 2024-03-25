const friendService = require("../../services/app/friendService");

//  lấy tất cả bạn
const getAllFriendController = async () => {
  try {
    return await friendService.getAllFriend();
  } catch (error) {
    return null;
  }
};

// lấy số lượng bạn bè theo id
const getFriendsById = async (id) => {
  try {
    return await friendService.getFriendsById(id);
  } catch (error) {
    return null;
  }
};

// lấy thông tin bạn bè theo người dùng
const getInforFriendsbyIdController = async (id) => {
  try {
    return await friendService.getInformationFriendsById(id);
  } catch (error) {
    return null;
  }
};

// lấy người lạ đã gửi yêu cầu
const getOtherUsersController = async (id) => {
  try {
    return await friendService.getUsersSentRequest(id);
  } catch (error) {
    return null;
  }
};

//  lấy người lạ
const getUsersController = async (id) => {
  try {
    return await friendService.getUsers(id);
  } catch (error) {
    return null;
  }
};

//  kết bạn
const addFriendController = async (userid, friendid, requestedat, status) => {
  try {
    return await friendService.addFriend(userid, friendid, requestedat, status);
  } catch (error) {
    return null;
  }
};

// hủy yêu cầu kết bạn
const onCancelRequestController = async (idRequest) => {
  try {
    return await friendService.cancelRequest(idRequest);
  } catch (error) {
    return null;
  }
}

// lấy người dùng đã gửi yêu cầu kết bạn cho mình 
const getUsersRequestController = async (id) => {
  try {
    return await friendService.getUsersRequest(id);
  } catch (error) {
    return null;
  }
}

// chấp nhận lời mời kết bạn
const AcceptRequestController = async (id) => {
  try {
    return await friendService.AcceptRequest(id);
  } catch (error) {
    return null;
  }
}  

// tìm yêu cầu kết bạn 
const findFriendRequestController = async (myId, friendId) => {
  try {
    return await friendService.findFriendsRequest(myId, friendId);
  } catch (error) {
    return null;
  }
}  

module.exports = {
  getAllFriendController,
  getFriendsById,
  getInforFriendsbyIdController,
  getOtherUsersController,
  getUsersController,
  addFriendController,
  onCancelRequestController,
  getUsersRequestController,
  AcceptRequestController,
  findFriendRequestController
};
