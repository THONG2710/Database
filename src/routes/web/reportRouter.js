const express = require("express");
const router = express.Router();
const { getAllReports } = require("../../controllers/web/reportController");
const { checkTokenWeb } = require("../../middleware/authen");

//table Users
router.get("/report", [], getAllReports);

module.exports = router;
