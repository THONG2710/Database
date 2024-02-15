const hotelService = require('../../services/app/hotelService');

// get all hotel 
const getAllHotelController = async () => {
    try {
        const hotels = await hotelService.getAllHotel();
        console.log(hotels);
        return hotels;
    } catch (error) {
        console.log('get all hotel controller error: ' + error);
    }
};

// get all service hotel
const getAllServiceHotelController = async () => {
    try {
        const services = await hotelService.getAllServiceHotel();
        return services;
    } catch (error) {
        console.log("get all service hotel controller error: " + error);
    }
};


module.exports = {getAllHotelController, getAllServiceHotelController};