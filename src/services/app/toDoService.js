const toDoModel = require("../../models/toDo");

// tạo mới một todolist
const createToDo = async (userid, createdat) => {
  try {
    const todo = { userid: userid, createdat: createdat };
    const newToDo = new toDoModel(todo);
    const res = await newToDo.save();
    if (res) {
      return res;
    }
    return null;
  } catch (error) {
    console.log("error creating todo : " + error.message);
  }
};

module.exports = { createToDo };
