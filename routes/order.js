const express = require("express");
const router = express.Router();
const order = require("../models/order");
const api = process.env.API_URL;
const mongoose = require("mongoose");

router.get(`/`, async (req, res) => {
  const orderList = await order.find();
  if (!orderList) {
    res.status(500).json({ success: salse });
  }
  res.send(orderList);
});

module.exports = router;
