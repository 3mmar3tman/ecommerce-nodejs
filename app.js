const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");
const categoryRouter = require("./routes/categorey");

//http://localhost:${port}/api/v1

const api = process.env.API_URL;
console.log("API URL is:", api);

//middleware
app.use(express.json());
app.use(`${api}/products`, productRouter);
app.use(`${api}/users`, userRouter);
app.use(`${api}/orders`, orderRouter);
app.use(`${api}/categories`, categoryRouter);

mongoose
  .connect(process.env.CONNECTION_DB)
  .then(() => {
    console.log("database connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
