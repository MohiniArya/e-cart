import React, { useState, useEffect } from "react";
import "./index.modules.scss";
import CartItem from "./cart-item";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cartData, setCartData] = useState([]);
  let total =
    cartData &&
    cartData.reduce(function(prev, cur) {
      return prev + cur.price;
    }, 0);

  const onCheckout = () => {
    alert("Thank you.Please visit us Again ");
  };
  useEffect(() => {
    let data;
    const fetchCartData = () => {
      data = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      setCartData(data);
    };
    return fetchCartData();
  }, []);
  return (
    <div>
      <div className="cart-header">
        <Link to="/">
          <img src="/images/back-arrow.png" alt="logo" />
        </Link>
      </div>
      <div className="cart">
        {cartData && cartData.length > 0 ? (
          cartData.map(
            (item, index) => {
              if (item !== null) {
                return (
                  <CartItem
                    cartInfo={item}
                    id={index}
                    key={index}
                    setCartData={setCartData}
                  />
                );
              }
              return false;
            },
            [cartData]
          )
        ) : (
          <div className="empty-cart">Please add Products to Cart</div>
        )}
      </div>
      {cartData && cartData.length > 0 && (
        <div className="checkout-box">
          <div className="total">Total amount {total}</div>
          <div className="checkout-button" onClick={onCheckout}>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
