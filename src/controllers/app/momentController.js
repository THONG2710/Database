const momentService = require('../../services/app/momentService');

// lấy tất cả khoảnh khắc
const getAllMomentsController = async () => {
    try {
        return await momentService.getAllMoments();
    } catch (error) {
        return null;
    }
};

//  lấy khoảnh khắc theo id người dùng
const getMomentByIdController = async (id) => {
    try {
        return await momentService.getMomentById(id);
    } catch (error) {
        return null;
    }
};

// tạo khoảnh khắc mới
const createMomentController = async (userid, createdat, content, caption, description, isimage) => {
    try {
        return await momentService.createMoment(userid, createdat, content, caption, description, isimage);
    } catch (error) {
        return null;
    }
};

// xóa một khoảnh khắc
const deleteMomentController = async (id) => {
    try {
        return await momentService.deleteMoment(id);
    } catch (error) {
        return false;
    }
};

//  lấy khoảnh khắc của bạn bè 
const getFriendMomentsController = async (id) => {
    try {
        return await momentService.getFriendsMoment(id);
    } catch (error) {
        return null;
    }
};

module.exports = {getAllMomentsController, getMomentByIdController, createMomentController, deleteMomentController, getFriendMomentsController}