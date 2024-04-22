const diaryModel = require("../../models/diaryModel");
const userModel = require("../../models/UserModel");

const getAllDiary = async (page) => {
  try {
    const diaries = await diaryModel
      .find()
      .limit(10)
      .skip((page - 1) * 10)
      .sort({ createdat: -1 });
    for (const diary of diaries) {
      const userid = diary.get("userid");
      if (userid) {
        const user = await userModel.findById(userid);
        diary.username = user?.username;
      }
    }
    return diaries;
  } catch (error) {
    return error;
  }
};

//lay page
const getAllDiaryPage = async () => {
  try {
    const result = await diaryModel.countDocuments();
    const numberOfPages = Math.ceil(result / 10);
    return numberOfPages;
  } catch (error) {
    return error;
  }
};
module.exports = { getAllDiary, getAllDiaryPage };
