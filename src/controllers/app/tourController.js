const tourService = require("../../services/app/tourService");

// get all tours
const getAllTourController = async () => {
  try {
    const tours = await tourService.getAllTour();
    return tours;
  } catch (error) {
    console.log("get all tour error: ", error);
  }
};

// get all content tour
const getAllContentTourController = async () => {
  try {
    const contents = await tourService.getAllContentTour();
    return contents;
  } catch (error) {
    console.log("get all content tour error: ", error);
  }
};

// get all detail tour
const getAllDetailTourController = async () => {
  try {
    const details = await tourService.getAllDetailTour();
    return details;
  } catch (error) {
    console.log("get all detail tour controller error: ", error);
  }
};

// get tour by id
const getTourByIdController = async (id) => {
  try {
    const tour = await tourService.getTourById(id);
    console.log(tour);
    return tour;
  } catch (error) {
    console.log("get tour by id controller error: ", error);
  }
};

// get detail tour by id
const getDetailTourByIdController = async (id) => {
  try {
    return await tourService.getDetailTourById(id);
  } catch (error) {
    console.log('get detail tour by id controller error: ', error);
  }
};

// get schedule
const getTheTourScheduleController = async (idTourDetail) => {
  try {
    const schedule = await tourService.getTheTourSchedule(idTourDetail);
    return schedule;
  } catch (error) {
    console.log("get the tour schedule controller error: " + error);
  }
};

// get book tour
const getBookTourController = async () => {
  try {
    const bookTourController = await tourService.getBookTour();
    return bookTourController;
  } catch (error) {
    console.log("get book tour controller error: " + error);
  }
};

// book tour
const bookTourController = async (date, user, totalAmout, numberOfReservations, tour) => {
    try {
        const bookTour = await tourService.bookTour(date, user, totalAmout, numberOfReservations, tour);
        return bookTour;
    } catch (error) {
        log.error("book tour controller error: " + error);
    }
};

module.exports = {
  getAllTourController,
  getAllContentTourController,
  getAllDetailTourController,
  getTourByIdController,
  getTheTourScheduleController,
  getBookTourController,
  bookTourController,
  getDetailTourByIdController
};
