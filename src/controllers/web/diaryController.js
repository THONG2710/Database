const diaryService = require("../../services/web/diaryService");


const getAllDiary = async (req, res) => {
  const diaries = await diaryService.getAllDiary();
  // console.log(reports);
  res.render("diary/diaries.ejs", { diaries });
};

module.exports = {
  getAllDiary,
};
