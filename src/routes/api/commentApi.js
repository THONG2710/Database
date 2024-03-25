const express = require("express");
const router = express.Router();
const commentsController = require("../../controllers/app/CommentController");

//  lấy tất cả bình luận của khoảnh khắc
// http://localhost:3000/api/comments/getComments/
router.get("/getComments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await commentsController.getMomentsCommentsController(id);
    if (comments) {
      return res.status(200).json({ result: true, comments: comments });
    }
    return res.status(500).json({ result: false, comments: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

// viết bình luận
// http://localhost:3000/api/comments/postComments
router.post("/postComments", async (req, res) => {
  try {
    const { userid, momentid, content, createdat } = req.body;
    const comments = await commentsController.postComment(
      userid,
      momentid,
      content,
      createdat
    );
    if (comments) {
      return res.status(200).json({ result: true, comments: comments });
    }
    return res.status(500).json({ result: false, comments: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});
module.exports = router;
