const express = require("express");
const router = express.Router();
const { getAllMoment } = require("../../controllers/web/momentController");
const { checkTokenWeb } = require("../../middleware/authen");

//table Users
router.get("/moment", [checkTokenWeb], getAllMoment);

module.exports = router;
