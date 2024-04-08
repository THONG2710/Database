const reportService = require("../../services/web/reportService");

const getAllReports = async (req, res) => {
  const reports = await reportService.getAllReports();
  reports.forEach((report) => {
    if (report.time_created) {
      const date = new Date(report.time_created * 1000);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      report.time_created = `${day}/${month}/${year}`;
    }
  });
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
