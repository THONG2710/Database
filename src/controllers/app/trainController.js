const trainService = require('../../services/app/trainService');

// lất tất cả vé tàu
const getAllTrainTicketController = async () => {
    try {
        return await trainService.getAllTrainTicket();
    } catch (error) {
        console.log('get all train ticket controllers failed: ' + error);
    }
};

module.exports = {getAllTrainTicketController};