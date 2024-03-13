const toDoService = require("../../services/app/toDoService");

//  tạo mới một todolist
const createToDoController = async (userid, createdat) => {
  try {
    return await toDoService.createToDo(userid, createdat);
  } catch (error) {
    return null;
  }
};

module.exports = { createToDoController };
