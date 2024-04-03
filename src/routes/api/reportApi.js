const express = require("express");
const router = express.Router();
const reportController = require("../../controllers/app/reportController");

// báo cáo bài viết
// http://localhost:3000/api/report/createReport
router.post("/createReport", async (req, res, next) => {
  try {
    const { idDiary, userid, created, reason, status } = req.body;
    const report = await reportController.createReport(
      idDiary,
      userid,
      created,
      reason,
      status
    );
    if (report) {
      return res.status(200).json({ result: true, report: report });
    }
    return res.status(500).json({ result: false, report: null });
  } catch (error) {
    return res.status(200).json({ result: false, error: error });
  }
});

module.exports = router;
