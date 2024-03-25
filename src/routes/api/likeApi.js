const express = require("express");
const router = express.Router();
const likeController = require("../../controllers/app/likeController");

//  lấy lượt thích của bài viết
// http://localhost:3000/api/likes/getLikes/
router.get("/getLikes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const likes = await likeController.getLikeController(id);
    if (likes) {
      return res.status(200).json({ result: true, likes: likes });
    }
    return res.status(500).json({ result: false, likes: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

//  thích bài viết
// http://localhost:3000/api/likes/postLike
router.post("/postLike", async (req, res) => {
  try {
    const { userid, momentid, createdat } = req.body;
    const likes = await likeController.postLikeController(
      userid,
      momentid,
      createdat
    );
    if (likes) {
      return res.status(200).json({ result: true, likes: likes });
    }
    return res.status(500).json({ result: false, likes: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

//  cập nhật lượt thích bài viết
// http://localhost:3000/api/likes/updateLike
router.post("/updateLike/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const likes = await likeController.updateLike(id);
    if (likes) {
      return res.status(200).json({ result: true, likes: likes });
    }
    return res.status(500).json({ result: false, likes: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

module.exports = router;
