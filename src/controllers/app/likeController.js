const likeService = require("../../services/app/likeService");

// lấy lượt thích của một bài viết
const getLikeController = async (id) => {
  try {
    return await likeService.getLikes(id);
  } catch (error) {
    return null;
  }
};

// thích bài viết
const postLikeController = async (userid, momentid, createdat) => {
  try {
    return await likeService.postLike(userid, momentid, createdat);
  } catch (error) {
    return null;
  }
};

// cập nhật lượt thích
const updateLike = async (id) => {
  try {
    return await likeService.updateLike(id);
  } catch (error) {
    return null;
  }
}

module.exports = { getLikeController, postLikeController, updateLike };
