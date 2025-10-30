const mongoose = require("mongoose");

const categoretSchema = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  Image: String,
});
module.exports = mongoose.model("categore", categoretSchema);
