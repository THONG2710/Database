const diaryModel = require("../../models/diaryModel");

const getAllDiary = async () => {
  try {
    return await diaryModel.find();
  } catch (error) {
    return error;
  }
};
module.exports = { getAllDiary };
