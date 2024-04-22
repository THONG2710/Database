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
      return res.status(200).json({ result: true, todolist: todolist });
    }
    return res.status(500).json({ result: false, todolist: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

// lấy todolist theo người dùng
// http://localhost:3000/api/todolist/getTodolist?userid=65e46da3fc13ae321ccd380e&createdat=1710483239336
router.get("/getTodolist", async (req, res, next) => {
  try {
    const { userid, createdat } = req.query;
    const todolist = await toDoController.getTodolistController(
      userid,
      createdat
    );
    if (todolist) {
      return res.status(200).json({ result: true, todolist: todolist });
    }
    return res.status(500).json({ result: false, todolist: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

// kiểm tra xem ngày đó đã có todo list hay chưa
// http://localhost:3000/api/todolist/getCheckTodolist?id=&createdat=
router.get("/getCheckTodolist", async (req, res, next) => {
  try {
    const { id, createdat } = req.query;
    const todolist = await toDoController.getCheckTodoListController(
      id,
      createdat
    );
    if (todolist) {
      return res.status(200).json({ result: true, todolist: todolist });
    }
    return res.status(500).json({ result: false, todolist: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

// lấy todolist theo id người dùng
// http://localhost:3000/api/todolist/getTodolistByIdUser?id=
router.get("/getTodolistByIdUser", async (req, res, next) => {
  try {
    const { id } = req.query;
    const todolist = await toDoController.getTodolistByIdUserController(id);
    if (todolist) {
      return res.status(200).json({ result: true, todolist: todolist });
    }
    return res.status(500).json({ result: false, todolist: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

module.exports = router;
