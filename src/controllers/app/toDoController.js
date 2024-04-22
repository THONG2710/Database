const toDoService = require("../../services/app/toDoService");

//  tạo mới một todolist
const createToDoController = async (userid, createdat) => {
  try {
    return await toDoService.createToDo(userid, createdat);
  } catch (error) {
    return null;
  }
};

// lấy todo list
const getTodolistController = async (userid, createdat) => {
  try {
    const res = await toDoService.getTodolistById(userid, createdat);
    console.log(res);
    return res;
  } catch (error) {
    return null;
  }
};

//  kiểm tra xem ngày đó đã có todolist hay chưa
const getCheckTodoListController = async (id, createdat) => {
  try {
    return await toDoService.getTodolist(id, createdat);
  } catch (error) {
    return null;
  }
};

// lấy todo list theo id người dùng
const getTodolistByIdUserController = async (id) => {
  try {
    return await toDoService.getTodolistByIdUser(id);
  } catch (error) {
    return null;
  }
};

module.exports = {
  createToDoController,
  getTodolistController,
  getCheckTodoListController,
  getTodolistByIdUserController,
};
