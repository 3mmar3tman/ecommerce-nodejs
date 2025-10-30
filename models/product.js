const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  Image: String,
});
module.exports = mongoose.model("Product", productSchema);
