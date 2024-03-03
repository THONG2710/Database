const momentService = require('../../services/app/momentService');

// lấy tất cả khoảnh khắc
const getAllMomentsController = async () => {
    try {
        return await momentService.getAllMoments();
    } catch (error) {
        return null;
    }
}

module.exports = {getAllMomentsController}