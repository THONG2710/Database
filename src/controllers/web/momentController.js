const momentService = require("../../services/web/momentService");

const getAllMoment = async (req, res) => {
  let page = req.query.page || 1;
  const moments = await momentService.getAllMoment(page);
  const numberOfPages = await momentService.getAllUsersPage();
  moments.forEach((moment) => {
    if (moment.createdat) {
      const date = new Date(moment.createdat * 1000);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      moment.createdat = `${day}/${month}/${year}`;
    }
  });
  res.render("moment/moments.ejs", { moments, numberOfPages, page});
};

module.exports = {
  getAllMoment,
};
