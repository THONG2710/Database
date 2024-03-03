const diaryModel = require("../../models/diaryModel");
const friendModel = require("../../models/friendModel");

// lấy tất cả danh sách diary
const getAllDiaries = async () => {
  try {
    const diaries = await diaryModel.find();
    if (diaries) {
      return diaries;
    }
    return [];
  } catch (error) {
    console.log("get all diaries failed: " + error);
    return null;
  }
};

//  lấy nhật ký theo id người dùng
const getDiariesByIdUser = async (idUser) => {
  try {
    const diaries = await diaryModel.find({ userid: idUser }).exec();
    if (diaries) {
      return diaries;
    }
  } catch (error) {
    console.log(" get diaries by id user failed: " + error);
    return null;
  }
};

//  lấy nhật ký bạn bè
const getDiariesMyFriends = async (idUser) => {
  try {
    const friends = await friendModel.find({ userid: idUser }).exec();
    const listDiariesMyFriends = [];
    for (const friend of friends) {
      const id = friend.friendid;
      const diaries = await diaryModel.find({ userid: id }).exec();
      listDiariesMyFriends.push(diaries);
    }
    if (listDiariesMyFriends.length > 0) {
      return listDiariesMyFriends;
    }
    return [];
  } catch (error) {
    return null;
  }
};

module.exports = { getAllDiaries, getDiariesByIdUser, getDiariesMyFriends };
