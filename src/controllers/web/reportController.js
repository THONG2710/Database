const reportService = require("../../services/web/reportService");

const getAllReports = async (req, res) => {
  let page = req.query.page || 1;
  const reports = await reportService.getAllReports(page);
  const numberOfPages = await reportService.getAllReportsPage();
  reports.forEach((report) => {
    if (report.time_created) {
      const date = new Date(report.time_created * 1000);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      report.time_created = `${day}/${month}/${year}`;
    }
  });
  res.render("report/report.ejs", { reports, numberOfPages, page });
};

//ban report
const banReport = async (id) => {
  try {
    const report = await reportService.banReport(id);
    return report;
  } catch (error) {
    return error;
  }
};

//delete report
const deleteReport = async (id) => {
  try {
    const report = reportService.deleteReport(id);
    return report;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReports,
  banReport,
  deleteReport,
};
