const momentModel = require('../../models/momentModel');

// lấy tất cả khoảnh khắc
const getAllMoments = async () => {
    try {
        const moments = await momentModel.find();
        console.log(moments);
        if (moments) {
            return moments;
        }
        return null;
    } catch (error) {
        console.log("get all moments failed ", error);
        return null;
    }
}

module.exports = {getAllMoments}