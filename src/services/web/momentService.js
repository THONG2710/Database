const momentModel = require("../../models/momentModel");
const userModel = require("../../models/UserModel");

const getAllMoment = async () => {
  try {
    const momments = await momentModel.find().sort({ createdat: -1 });
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
module.exports = { getAllMoment };
