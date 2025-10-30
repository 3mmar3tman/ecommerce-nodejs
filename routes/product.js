const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const api = process.env.API_URL;
const mongoose = require("mongoose");

router.post(`/`, (req, res) => {
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    Image: req.body.Image,
  });
  product
    .save()
    .then((createProduct) => {
      res.status(201).json(createProduct);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        success: false,
      });
    });
});

router.get(`/`, async (req, res) => {
  const productList = await Product.find();
  if (!productList) {
    res.status(500).json({ success: false });
  }
  res.send(productList);
});

module.exports = router;
