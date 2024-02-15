const airlineService = require('../../services/app/airlineService');

// lấy tất cả vé máy bay
const getAllAirlineTicketController = async () => {
    try {
        return await airlineService.getAllAirlineTickets();
    } catch (error) {
        console.log('get all airline ticket controllers error: ' + error);
    }
};

// lấy tất cả hãng hàng bay
const getAllAirlineCompanyController = async () => {
    try {
        return await airlineService.getAirlineCompany();
    } catch (error) {
        console.log('get all airline company controllers error: ' + error);
    }
};

// lấy hãng hàng không theo id
const getAirlineCompanyByIdController = async (id) => {
    try {
        return await airlineService.getAirlineCompanyById(id);
    } catch (error) {
        console.log('get airline company by id error: ' + error);
    }
};

module.exports = {getAllAirlineTicketController, getAllAirlineCompanyController, getAirlineCompanyByIdController}