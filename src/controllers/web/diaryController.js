const diaryService = require("../../services/web/diaryService");

const getAllDiary = async (req, res) => {
  let page = req.query.page || 1;
  const diaries = await diaryService.getAllDiary(page);
  const numberOfPages = await diaryService.getAllDiaryPage();
  diaries.forEach((diary) => {
    if (diary.createdat) {
      const date = new Date(diary.createdat * 1000);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      diary.createdat = `${day}/${month}/${year}`;
    }
  });
  res.render("diary/diaries.ejs", { diaries, numberOfPages,page });
};

module.exports = {
  getAllDiary,
};
