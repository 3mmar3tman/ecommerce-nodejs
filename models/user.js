const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  Image: String,
});
module.exports = mongoose.model("user", userSchema);
