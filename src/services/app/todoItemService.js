const todoItemModel = require("../../models/toDoItemModel");
const toDoModel = require("../../models/toDoModel");
const todoService = require("../../services/app/toDoService");

// tạo một item
const createItem = async (status, content, description, todoid) => {
  try {
    const item = {
      status: status,
      content: content,
      description: description,
      todoid: todoid,
    };
    const newItem = new todoItemModel(item);
    const res = await newItem.save();
    if (res) {
      return res;
    }
    return null;
  } catch (error) {
    console.log("Error create todo item: " + error.message);
  }
};

// cập nhật trạng thái của một item
const updateWork = async (idWord, status) => {
  try {
    const work = await todoItemModel.findById(idWord);
    if (work) {
      work.status = status ? status : work.status;
      await work.save();
      return work;
    }
    return null;
  } catch (error) {
    console.log("failed to update work: ", error.message);
  }
};

// lấy các item của một todo
const getItemByTodo = async (idTodo) => {
  try {
    const itemsFinished = await todoItemModel.find({
      todoid: idTodo,
      status: true,
    });
    const itemsUnfinished = await todoItemModel.find({
      todoid: idTodo,
      status: false,
    });
    if (itemsFinished.length > 0 || itemsUnfinished.length > 0) {
      return { finished: itemsFinished, unfinished: itemsUnfinished };
    }
    return null;
  } catch (error) {
    console.log("failed to get item: " + error);
  }
};

module.exports = { createItem, updateWork, getItemByTodo };
