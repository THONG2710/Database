const todoItemService = require("../../services/app/todoItemService");

//  tạo một item
const createItemController = async (status, content, description, todoid) => {
  try {
    return await todoItemService.createItem(
      status,
      content,
      description,
      todoid
    );
  } catch (error) {
    return null;
  }
};

// cập nhật trạng thái của một item
const updateWorkController = async (idWord, status) => {
  try {
    return await todoItemService.updateWork(idWord, status);
  } catch (error) {
    return null;
  }
};

// lấy item theo todo
const getItemByTodo = async (idTodo) => {
  try {
    return await todoItemService.getItemByTodo(idTodo);
  } catch (error) {
    return null;
  }
};

module.exports = { createItemController, updateWorkController, getItemByTodo };
