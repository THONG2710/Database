const express = require("express");
const router = express.Router();
const friendController = require("../../controllers/app/friendController");

// lấy tất cả bạn bè
// http://localhost:3000/api/friend/getAllFriends
router.get("/getAllFriends", async (req, res, next) => {
  try {
    const friends = await friendController.getAllFriendController();
    if (friends) {
      return res.status(200).json({ result: true, friends: friends });
    }
    return res.status(500).json({ result: true, friends: null });
  } catch (error) {
    return res.status(400).json({ result: true, friends: null });
  }
});

module.exports = router;
