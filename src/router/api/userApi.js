const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');

// http://localhost:3000/api/users/getAllUsers
router.get('/getAllUsers', async (req, res, next) => {
    try {
        const users = await userController.getAllUsersController();
        return res.status(200).json({result: true, users: users});  
    } catch (error) {
        return res.status(500).json({result: false, users: null});
    }
});

module.exports = router;