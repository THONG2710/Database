const diaryModel = require("../../models/diaryModel");
const reportModel = require("../../models/reportModel");
const userModel = require("../../models/UserModel");

const getAllReports = async (page) => {
  try {
    const reports = await reportModel
      .find({ status : true})
      .limit(10)
      .skip((page - 1) * 10)
      .sort({ time_created: -1 });
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
        report.isavailable = diary.isavailable;
      }
    }
    return reports;
  } catch (error) {
    return error;
  }
};

//lay page
const getAllReportsPage = async () => {
  try {
    const result = await reportModel.countDocuments();
    const numberOfPages = Math.ceil(result / 10);
    return numberOfPages;
  } catch (error) {
    return error;
  }
}

//ban report
const banReport = async (id) => {
  try {
    const diary = await diaryModel.findById(id);
    if (diary) {
      diary.isavailable = !diary.isavailable;
    }
    return await diary.save();
  } catch (error) {
    return error;
  }
};

//delete report
const deleteReport = async (id) => {
  try {
    const report = await reportModel.findById(id);

    if (report) {
      report.status = false;
    }
    return await report.save();
  } catch (error) {
    return error;
  }
};
module.exports = { getAllReports, banReport, deleteReport, getAllReportsPage };
