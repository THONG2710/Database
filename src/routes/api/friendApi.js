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

// lấy bạn bè theo id
// http://localhost:3000/api/friend/getFriendsById?id=
router.get("/getFriendsById", async (req, res, next) => {
  try {
    const { id } = req.query;
    const friends = await friendController.getFriendsById(id);
    if (friends) {
      return res.status(200).json({ result: true, friends: friends });
    }
    return res.status(500).json({ result: true, friends: null });
  } catch (error) {
    return res.status(400).json({ result: true, friends: null });
  }
});

//  lấy thông tin của bạn bè theo id người dùng
// http://localhost:3000/api/friend/getInforFriendsById?id=
router.get("/getInforFriendsById", async (req, res, next) => {
  try {
    const { id } = req.query;
    const friends = await friendController.getInforFriendsbyIdController(id);
    if (friends) {
      return res.status(200).json({ result: true, friends: friends });
    }
    return res.status(500).json({ result: true, friends: null });
  } catch (error) {
    return res.status(400).json({ result: true, friends: null });
  }
});

//  lấy danh sách người lạ đã gửi yêu cầu
// http://localhost:3000/api/friend/getOtherUsersSentRequest?id=
router.get("/getOtherUsersSentRequest", async (req, res, next) => {
  try {
    const { id } = req.query;
    const users = await friendController.getOtherUsersController(id);
    if (users) {
      return res.status(200).json({ result: true, users: users });
    }
    return res.status(500).json({ result: true, users: null });
  } catch (error) {
    return res.status(400).json({ result: true, users: null });
  }
});

//  lấy danh sách người lạ
// http://localhost:3000/api/friend/getOtherUsers/
router.get("/getOtherUsers/:userid", async (req, res, next) => {
  try {
    const { userid } = req.params;
    const users = await friendController.getUsersController(userid);
    if (users) {
      return res.status(200).json({ result: true, users: users });
    }
    return res.status(500).json({ result: false, users: null });
  } catch (error) {
    return res.status(400).json({ result: false, users: null });
  }
});

//  kết bạn
// http://localhost:3000/api/friend/addFriend
router.post("/addFriend", async (req, res, next) => {
  try {
    const { userid, friendid, requestedat, status } = req.body;
    const result = await friendController.addFriendController(
      userid,
      friendid,
      requestedat,
      status
    );
    if (result) {
      return res.status(200).json({ result: true, ask: result });
    }
    return res.status(500).json({ result: false, ask: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

// Hủy yêu cầu kết bạn
// http://localhost:3000/api/friend/cancelRequest/
router.post("/cancelRequest/:idRequest", async (req, res, next) => {
  try {
    const { idRequest } = req.params;
    const result = await friendController.onCancelRequestController(idRequest);
    if (result) {
      return res.status(200).json({ result: true, ask: result });
    }
    return res.status(500).json({ result: false, ask: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

// Lấy người dùng đã gửi lời mời kết bạn cho mình
// http://localhost:3000/api/friend/getUsersRequest/
router.get("/getUsersRequest/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await friendController.getUsersRequestController(id);
    if (users) {
      return res.status(200).json({ result: true, users: users });
    }
    return res.status(500).json({ result: false, users: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error.message });
  }
});

// chấp nhận lời mời kết bạn
// http://localhost:3000/api/friend/acceptRequest/
router.post("/acceptRequest/:id", async (req, res, next) => {
  console.log(req.params.id);
  try {
    const { id } = req.params;
    const result = await friendController.AcceptRequestController(id);
    if (result) {
      return res.status(200).json({ result: true, ask: result });
    }
    return res.status(500).json({ result: false, ask: null });
  } catch (error) {
    return res.status(400).json({ result: false, error: error });
  }
});

module.exports = router;
