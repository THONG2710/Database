const reportModel = require("../../models/reportModel");

// báo cáo 1 bài nhật kí
const createReport = async (idDiary, userid, created, reason, status) => {
  try {
    const report = {
      id_diary: idDiary,
      id_user: userid,
      time_created: created,
      reason: reason,
      status: status,
    };
    const newReport = new reportModel(report);
    const res = newReport.save();
    if (res) {
      return res;
    }
    return null;
  } catch (error) {
    console.log("failed to report: " + error);
  }
};

module.exports = { createReport };
