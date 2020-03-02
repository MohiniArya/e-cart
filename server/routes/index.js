const router = require("express").Router();
const productRoutes = require("./products");
const bodyParser = require("body-parser");

const initRoutes = app => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());
  console.log("reached here")
  router.use("/products", productRoutes);
  console.log("reached here")
  app.use("/api", router);
  console.log("reached here")
};

module.exports = initRoutes;