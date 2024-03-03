const friendModel = require('../../models/friendModel');

// lấy tất cả bạn
const getAllFriend = async () => {
    try {
        const friends = await friendModel.find();
        if (friends) {
            return friends;
        }
        return null;
    } catch (error) {
        console.log('Failed to find friend: ' + error.message);
        return null;
    }
};

module.exports = {getAllFriend}