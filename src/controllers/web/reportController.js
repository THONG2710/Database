const reportService = require("../../services/web/reportService");

const getAllReports = async (req, res) => {
  const reports = await reportService.getAllReports();
  // console.log(reports);
  res.render("report/report.ejs", { reports });
};

module.exports = {
  getAllReports,
};
