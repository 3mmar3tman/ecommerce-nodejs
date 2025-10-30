const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  Image: String,
});
module.exports = mongoose.model("order", orderSchema);
