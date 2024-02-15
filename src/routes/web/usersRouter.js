const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../../controllers/web/usersController");
const { checkTokenWeb } = require("../../middleware/authen");

//table Users
router.get("/",[], getAllUsers);

module.exports = router;
