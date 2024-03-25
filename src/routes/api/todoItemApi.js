const express = require("express");
const router = express.Router();
const todoItemController = require("../../controllers/app/todoItemController");

// tạo một itemTodo mới
// http://localhost:3000/api/itemTodo/createItem
router.post("/createItem", async (req, res, next) => {
  try {
    const { status, content, description, todoid } = req.body;
    const item = await todoItemController.createItemController(
      status,
      content,
      description,
      todoid
    );
    if (item) {
      return res.status(200).json({ result: true, item: item });
    }
    return res.status(500).json({ result: false, item: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

// cập nhật trạng thái của một itemTodo
// http://localhost:3000/api/itemTodo/updateWork?idWork=&status=
router.post("/updateWork", async (req, res, next) => {
  try {
    const { idWork, status } = req.query;
    const item = await todoItemController.updateWorkController(idWork, status);
    if (item) {
      return res.status(200).json({ result: true, item: item });
    }
    return res.status(500).json({ result: false, item: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

module.exports = router;
