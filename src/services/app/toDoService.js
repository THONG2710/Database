const toDoModel = require("../../models/toDoModel");
const toDoItemModel = require("../../models/toDoItemModel");

// tạo mới một todolist
const createToDo = async (userid, createdat) => {
  try {
    const date = new Date(createdat);
    const Nday = date.getDay();
    const Nmonth = date.getMonth() + 1;
    const Nyear = date.getFullYear();
    const todos = await toDoModel.find({ userid: userid }).exec();
    let isAvalible = false;
    for (const todo of todos) {
      const date = new Date(todo.createdat);
      const day = date.getDay();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      if (day === Nday && month === Nmonth && year === Nyear) {
        isAvalible = true;
        break;
      }
    }
    if (isAvalible) {
      console.log("đã có todolist của ngày hôm nay");
      return null;
    } else {
      const todo = { userid: userid, createdat: createdat };
      const newToDo = new toDoModel(todo);
      const res = await newToDo.save();
      if (res) {
        return res;
      }
    }
  } catch (error) {
    console.log("error creating todo : " + error.message);
  }
};

// lấy todolist của ngày hôm nay
const getTodayList = async () => {
  try {
    const date = new Date(createdat);
    const Nday = date.getDay();
    const Nmonth = date.getMonth() + 1;
    const Nyear = date.getFullYear();
    const todos = await toDoModel.find({ userid: userid }).exec();
    for (const todo of todos) {
      const date = new Date(todo.createdat);
      const day = date.getDay();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      if (day === Nday && month === Nmonth && year === Nyear) {
        isAvalible = true;
        break;
      }
    }
  } catch (error) {}
};

// lấy todolist theo người dùng
const getTodolistById = async (userid, createdat) => {
  try {
    const previousDate = new Date(createdat * 1000);
    previousDate.setDate(previousDate.getDate() - 1);
    const nextDate = new Date(createdat * 1000);
    nextDate.setDate(nextDate.getDate() + 1);
    const previous = previousDate.getTime() / 1000;
    const next = nextDate.getTime() / 1000;
    const todo = await toDoModel
      .findOne({ userid: userid, createdat: { $gte: previous, $lte: next } })
      .exec();
    console.log(userid, previous, createdat, next, todo);
    if (todo) {
      const unfinishedWork = await toDoItemModel
        .find({ todoid: todo._id, status: false })
        .exec();
      const finishedWork = await toDoItemModel
        .find({ todoid: todo._id, status: true })
        .exec();
      const list = { unfinishedWork, finishedWork };
      return list;
    }
    return null;
  } catch (error) {
    console.log("get todo list error: " + error.message);
  }
};

// kiểm tra xem hôm đó đã có list todo hay chưa
const getTodolist = async (id, created) => {
  try {
    const previousDate = new Date(created * 1000);
    previousDate.setDate(previousDate.getDate() - 1);
    const nextDate = new Date(created * 1000);
    nextDate.setDate(nextDate.getDate() + 1);
    const previous = previousDate.getTime() / 1000;
    const next = nextDate.getTime() / 1000;
    const todo = await toDoModel
      .findOne({
        $and: [{ userid: id }, { createdat: { $gte: previous, $lte: next } }],
      })
      .exec();
    console.log(id, previous, created, next);
    if (todo) {
      console.log(todo);
      return todo;
    }
    return null;
  } catch (error) {
    console.log("failed to get todo list: " + error.message);
  }
};

module.exports = { createToDo, getTodolistById, getTodolist };
