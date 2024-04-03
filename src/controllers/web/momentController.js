const momentService = require("../../services/web/momentService");

const getAllMoment = async (req, res) => {
  const moments = await momentService.getAllMoment();
  // console.log(reports);
  moments.forEach((moment) => {
    if (moment.createdat) {
      const date = new Date(moment.createdat * 1000);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      moment.createdat = `${day}/${month}/${year}`;
    }
  });
  res.render("moment/moments.ejs", { moments });
};

module.exports = {
  getAllMoment,
};
