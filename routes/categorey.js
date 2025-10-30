const express = require("express");
const router = express.Router();
const cotegore = require("../models/cotegore");
const api = process.env.API_URL;
const mongoose = require("mongoose");

router.get(`/`, async (req, res) => {
  const categoreList = await cotegore.find();
  if (!categoreList) {
    res.status(500).json({ success: salse });
  }
  res.send(categoreList);
});

module.exports = router;
