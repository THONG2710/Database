const express = require("express");
const router = express.Router();
const toDoController = require("../../controllers/app/toDoController");

// tạo một todo list
// http://localhost:3000/api/todolist/createToDoList
router.post("/createToDoList", async (req, res, next) => {
  try {
    const { userid, createdat } = req.body;
    const todolist = await toDoController.createToDoController(
      userid,
      createdat
    );
    if (todolist) {
      res.status(200).json({ result: true, todolist: todolist });
    }
    res.status(500).json({ result: false, todolist: null });
  } catch (error) {
    res.status(400).json({ result: false, error: error });
  }
});

module.exports = router;
