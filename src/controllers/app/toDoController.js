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
    return await toDoService.getTodolistById(userid, createdat);
  } catch (error) {
    return null;
  }
}

//  kiểm tra xem ngày đó đã có todolist hay chưa 
const getCheckTodoListController = async (id, createdat) => {
  try {
    return await toDoService.getTodolist(id, createdat);
  } catch (error) {
    return null;
  }
} 

module.exports = { createToDoController, getTodolistController, getCheckTodoListController };
