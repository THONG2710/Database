const express = require("express");
const router = express.Router();
const { getAllDiary } = require("../../controllers/web/diaryController");
const { checkTokenWeb } = require("../../middleware/authen");

//table Users
router.get("/diary", [], getAllDiary);

module.exports = router;
