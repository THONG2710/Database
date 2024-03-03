const express = require('express');
const router = express.Router();
const momentController = require('../../controllers/app/momentController');

// lấy tất cả khoảnh khắc
// http://localhost:3000/api/moment/getAllMoments
router.get('/getAllMoments', async (req, res, next) => {
    try {
        const moments = await momentController.getAllMomentsController();
        if (moments) {
            return res.status(200).json({result: true, moments: moments});
        } 
        return res.status(500).json({result: false, moments: null});
    } catch (error) {
        return res.status(400).json({result: false, error: error.message});
    }
})

module.exports = router