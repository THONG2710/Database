const express = require("express");
const router = express.Router();
const reportController = require("../../controllers/web/reportController");
const { checkTokenWeb } = require("../../middleware/authen");

//table Users
router.get("/report", [checkTokenWeb], reportController.getAllReports);

//ban report
router.post("/banreport/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const result = await reportController.banReport(id);
    res.json({ result });
  } catch (error) {
    return error;
  }
});

//delete report
router.post("/deletereport/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const result = await reportController.deleteReport(id);
    res.json({ result });
  } catch (error) {
    return error;
  }
});
module.exports = router;
