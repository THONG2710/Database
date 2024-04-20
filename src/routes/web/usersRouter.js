const express = require("express");
const router = express.Router();
const userController = require("../../controllers/web/usersController");
const { checkTokenWeb } = require("../../middleware/authen");

//table Users
router.get("/", [checkTokenWeb], userController.getAllUsers);

//User detail
router.get("/userdetail/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userController.getUserById(id);
    const diaries = await userController.getDiariesByUserId(id);
    const moments = await userController.getMomentsByUserId(id);
    
    // console.log(user);
    // console.log(diaries);
    res.render("user/userdetail.ejs", { user, diaries, moments });
  } catch (error) {
    return error;
  }
});
//ban user
router.post("/banuser/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userController.banUser(id);
    res.json({ result });
  } catch (error) {
    return error;
  }
});

module.exports = router;
