const reportModel = require("../../models/reportModel");

const getAllReports = async () => {
    try {
      return await reportModel.find();
    } catch (error) {
      return error;
    }
  };
  module.exports = { getAllReports };