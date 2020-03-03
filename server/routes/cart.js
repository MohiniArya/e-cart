const router = require("express").Router();

let cartItems = [];
router.get("/cart", (_, res) => {
  res.json({
    cartItems
  });
});
router.post("/cart", (req, res) => {
  const { cartItem } = req.body;
  cartItems.push(cartItem);
  return res.json({
    success:true
  });
});

router.delete("/cart/id", (req, res) => {
  const { id } = req.params;
  cartItems.splice(id, 1);
  res.json({
    cartItems
  });
});

router.get("/cart/items", (req, res) => {
  res.json({
    totalCartItems: cartItems.length
  });
});

module.exports = router;
