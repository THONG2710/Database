const friendService = require('../../services/app/friendService');

//  lấy tất cả bạn
const getAllFriendController = async () => {
    try {
        return await friendService.getAllFriend();
    } catch (error) {
        return null;
    }
};


module.exports = {getAllFriendController}