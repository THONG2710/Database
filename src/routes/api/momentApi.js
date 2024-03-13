const express = require("express");
const router = express.Router();
const momentController = require("../../controllers/app/momentController");

// lấy tất cả khoảnh khắc
// http://localhost:3000/api/moment/getAllMoments
router.get("/getAllMoments", async (req, res, next) => {
  try {
    const moments = await momentController.getAllMomentsController();
    if (moments) {
      return res.status(200).json({ result: true, moments: moments });
    }
    return res.status(500).json({ result: false, moments: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
});

// lấy khoảnh khắc theo id người dùng
// http://localhost:3000/api/moment/getMomentsById?id=
router.get("/getMomentsById", async (req, res, next) => {
  try {
    const { id } = req.query;
    const moments = await momentController.getMomentByIdController(id);
    if (moments) {
      return res.status(200).json({ result: true, moments: moments });
    }
    return res.status(500).json({ result: false, moments: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
});

// tạo khoảnh khắc mới
// http://localhost:3000/api/moment/createMoment
router.post("/createMoment", async (req, res, next) => {
  try {
    const { userid, createdat, content, caption, description } = req.body;
    const moment = await momentController.createMomentController(
      userid,
      createdat,
      content,
      caption,
      description
    );
    if (moment) {
      return res.status(200).json({ result: true, moment: moment });
    }
    return res.status(500).json({ result: false, moment: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
});

// xóa một khoảnh khắc
// http://localhost:3000/api/moment/deleteMoment/:idMoment
router.get("/deleteMoment/:idMoment", async (req, res, next) => {
  try {
    const { idMoment } = req.params;
    const response = await momentController.deleteMomentController(idMoment);
    if (response) {
      return res.status(200).json({ result: true });
    }
    return res.status(500).json({ result: false });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
});

// lấy khoảnh khắc của bạn bè
// http://localhost:3000/api/moment/getFriendMoments?id=
router.get("/getFriendMoments", async (req, res, next) => {
  try {
    const { id } = req.query;
    const moments = await momentController.getFriendMomentsController(id);
    if (moments) {
      return res.status(200).json({ result: true, moments: moments });
    }
    return res.status(500).json({ result: false, moments: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
});

module.exports = router;
