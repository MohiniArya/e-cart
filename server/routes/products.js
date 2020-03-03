const router = require("express").Router();
const products = require("./data");

router.get("/", (req, res) => {
  res.json({
    products
  });
});

module.exports = router;
