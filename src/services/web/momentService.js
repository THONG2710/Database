const momentModel = require("../../models/momentModel");
const userModel = require("../../models/userModel");

const getAllMoment = async (page) => {
  try {
    const momments = await momentModel
      .find()
      .limit(10)
      .skip((page - 1) * 10)
      .sort({ createdat: -1 });
    for (const momment of momments) {
      const userid = momment.get("userid");
      if (userid) {
        const user = await userModel.findById(userid);
        momment.username = user?.username;
      }
    }
    return momments;
  } catch (error) {
    return error;
  }
};
//ley page
const getAllUsersPage = async () => {
  try {
    const result = await momentModel.countDocuments();
    const numberOfPages = Math.ceil(result / 10);
    return numberOfPages;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllMoment, getAllUsersPage };
