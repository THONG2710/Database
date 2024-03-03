const express = require("express");
const router = express.Router();
const diaryController = require("../../controllers/app/diaryController");

// lấy tất cả nhật kí
// http://localhost:3000/api/diary/getAllDiaries
router.get("/getAllDiaries", async (req, res, next) => {
  try {
    const diaries = await diaryController.getAllDiariesController();
    if (diaries) {
      return res.status(200).json({ result: true, diaries: diaries });
    }
    return res.status(500).json({ result: false, diaries: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
});

// lấy danh sách nhật kí theo id người dùng
// http://localhost:3000/api/diary/getDiariesByIdUser?id=
router.get("/getDiariesByIdUser", async (req, res, next) => {
  try {
    const { id } = req.query;
    console.log(id);
    const diaries = await diaryController.getDiariesByIdUserController(id);
    if (diaries) {
      return res.status(200).json({ result: true, diaries: diaries });
    }
    return res.status(500).json({ result: false, diaries: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
});

// lấy danh sách nhật kí của bạn bè
// http://localhost:3000/api/diary/getDiariesMyFriends?id=
router.get("/getDiariesMyFriends", async (req, res, next) => {
  try {
    const { id } = req.query;
    const diaries = await diaryController.getDiarisMyFriendsController(id);
    if (diaries) {
      return res.status(200).json({ result: true, diaries: diaries });
    }
    return res.status(500).json({ result: false, diaries: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
})

module.exports = router;
