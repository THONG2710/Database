const diaryModel = require("../../models/diaryModel");
const reportModel = require("../../models/reportModel");
const userModel = require("../../models/userModel");

const getAllReports = async () => {
  try {
    const reports = await reportModel.find().sort({ time_created: -1 });
    for (const report of reports) {
      const userid = report.get("id_user");
      if (userid) {
        const user = await userModel.findById(userid);
        report.username = user?.username;
      }
      const diaryid = report.get("id_diary");
      if (diaryid) {
        const diary = await diaryModel.findById(diaryid);
        report.diary = diary.diary;
        
      }
    }
    console.log(reports);
    return reports;
  } catch (error) {
    return error;
  }
};

//ban report
const banReport = async (id) => {
  try {
    const report = await reportModel.findById(id);
    if (report) {
      report.status = !report.status;
    }
    return await report.save();
  } catch (error) {
    return error;
  }
};
module.exports = { getAllReports, banReport };
