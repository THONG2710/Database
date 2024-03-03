const momentModel = require("../../models/momentModel");

const getAllMoment = async () => {
    try {
      return await momentModel.find();
    } catch (error) {
      return error;
    }
  };
  module.exports = { getAllMoment };