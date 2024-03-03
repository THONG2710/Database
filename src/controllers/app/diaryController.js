const diaryService = require('../../services/app/diaryService');

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

module.exports = {getAllDiariesController, getDiariesByIdUserController, getDiarisMyFriendsController}