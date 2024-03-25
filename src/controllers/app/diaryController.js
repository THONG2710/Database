const diaryService = require("../../services/app/diaryService");

// lấy tất cả danh sách nhật kí
const getAllDiariesController = async () => {
  try {
    return await diaryService.getAllDiaries();
  } catch (error) {
    return null;
  }
};

// lấy danh sách nhật kí theo id người dùng
const getDiariesByIdUserController = async (id) => {
  try {
    return await diaryService.getDiariesByIdUser(id);
  } catch (error) {
    return null;
  }
};

// lấy danh sách nhật kí bạn bè
const getDiarisMyFriendsController = async (idUser) => {
  try {
    const diaries = await diaryService.getDiariesMyFriends(idUser);
    return diaries;
  } catch (error) {
    return null;
  }
};

// tạo một bài nhật kí
const createDiaryController = async (idUser, diary, createdat, privacy) => {
  try {
    return await diaryService.createDiary(idUser, diary, createdat, privacy);
  } catch (error) {
    return null;
  }
};

// xóa một bài nhật kí
const deleteDiaryController = async (id) => {
  try {
    return await diaryService.deleteDiary(id);
  } catch (error) {
    return null;
  }
}; 


module.exports = {
  getAllDiariesController,
  getDiariesByIdUserController,
  getDiarisMyFriendsController,
  createDiaryController,
  deleteDiaryController
};
