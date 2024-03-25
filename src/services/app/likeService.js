const likeModel = require("../../models/likeModel");

// lấy lượt thích của bài viết
const getLikes = async (id) => {
  try {
    const likes = await likeModel.find({ momentid: id });
    if (likes) {
      return likes;
    }
    return null;
  } catch (error) {
    console.log("failed to get likes: " + error.message);
  }
};

// thích bài viết
const postLike = async (userid, momentid, createdat) => {
  try {
    const like = {
      userid: userid,
      momentid: momentid,
      createdat: createdat,
    };
    const newLike = new likeModel(like);
    const res = await newLike.save();
    if (res) {
      return res;
    }
    return null;
  } catch (error) {
    console.log("failed to post like: " + error.message);
  }
};

// cập nhật trạng thái thích
const updateLike = async (id) => {
  try {
      const res = await likeModel.deleteOne({_id: id});
      return res;
  } catch (error) {
    console.log('failed to update like: ' + error.message);
  }
}

module.exports = { getLikes, postLike, updateLike };
