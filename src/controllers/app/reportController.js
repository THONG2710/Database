const reportService = require("../../services/app/reportService");

// báo cáo bài viết
const createReport = async (idDiary, userid, created, reason, status) => {
  try {
    return await reportService.createReport(
      idDiary,
      userid,
      created,
      reason,
      status
    );
  } catch (error) {
    return null;
  }
};

module.exports = { createReport };
