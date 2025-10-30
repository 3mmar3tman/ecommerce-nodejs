const express = require("express");
const router = express.Router();
const user = require("../models/user");
const api = process.env.API_URL;
const mongoose = require("mongoose");

router.get(`/`, async (req, res) => {
  const userList = await user.find();
  if (!userList) {
    res.status(500).json({ success: salse });
  }
  res.send(userList);
});

module.exports = router;
