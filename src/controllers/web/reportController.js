const reportService = require("../../services/web/reportService");

const getAllReports = async (req, res) => {
  const reports = await reportService.getAllReports();
  // console.log(reports);
  res.render("report/report.ejs", { reports });
};

const banReport = async (id) => {
  try {
    const report = await reportService.banReport(id);
    return report;
  } catch (error) {
    return error;
  }

}

module.exports = {
  getAllReports,
  banReport,
};
