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
    const friends = await friendModel
      .find({ userid: idUser, status: 3 })
      .exec();
    const listDiariesMyFriends = [];
    for (const friend of friends) {
      const id = friend.friendid;
      const diaries = await diaryModel
        .find({
          $and: [{ userid: id }, { $or: [{ privacy: 2 }, { privacy: 3 }] }],
        })
        .exec();
      listDiariesMyFriends.push(...diaries);
    }
    const sortListDiariesMyFriends = listDiariesMyFriends.sort(
      (a, b) => b.createdat - a.createdat
    );
    if (sortListDiariesMyFriends.length > 0) {
      return sortListDiariesMyFriends;
    }
    return [];
  } catch (error) {
    return null;
  }
};

// tạo một bài nhật kí mới
const createDiary = async (idUser, diary, createdat, privacy) => {
  try {
    const Diary = {
      userid: idUser,
      diary: diary,
      createdat: createdat,
      privacy: privacy,
    };
    const newDiary = new diaryModel(Diary);
    const createDiary = await newDiary.save();
    // if (createDiary) {
    return createDiary;
    // }
  } catch (error) {
    console.log("create diary failled: " + error.message);
    return null;
  }
};

// xóa một bài nhật kí
const deleteDiary = async (id) => {
  try {
    const res = await diaryModel.deleteOne({_id: id});
    if (res) {
      return res;
    }
    return false;
  } catch (error) {
    console.log("delete diary failled: " + error.message);
  }
}

module.exports = {
  getAllDiaries,
  getDiariesByIdUser,
  getDiariesMyFriends,
  createDiary,
  deleteDiary
};
