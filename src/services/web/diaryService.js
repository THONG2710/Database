const diaryModel = require("../../models/diaryModel");
const userModel = require("../../models/userModel");

const getAllDiary = async () => {
  try {
    const diaries = await diaryModel.find().sort({ createdat: -1 });
    for (const diary of diaries) {
      const userid = diary.get("userid");
      if (userid) {
        const user = await userModel.findById(userid);
        diary.username = user?.username;
      }
    };
    console.log(diaries);
    return diaries;
  } catch (error) {
    return error;
  }
};
module.exports = { getAllDiary };
