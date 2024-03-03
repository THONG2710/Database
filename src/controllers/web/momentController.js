const momentService = require("../../services/web/momentService");

const getAllMoment = async (req, res) => {
  const moments = await momentService.getAllMoment();
  // console.log(reports);
  res.render("moment/moments.ejs", { moments });
};

module.exports = {
  getAllMoment,
};
