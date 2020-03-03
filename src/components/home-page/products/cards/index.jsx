import React from "react";
import "./index.modules.scss";
import { withRouter } from "react-router-dom";
const Cards = props => {
  const { productInfo, setBadge } = props;
  const { id, name, price, description } = productInfo;

  const onHandleAdd = e => {
    let newData = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    newData.push(productInfo);
    setBadge(newData.length);
    localStorage.setItem("cart", JSON.stringify(newData));
  };

  return (
    <div className="card" key={id}>
      <div className="image-container">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="product-name">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div>
        <h5>Price</h5>
        <p> Rs {price} </p>
        <div className="add-to-cart">
          <button onClick={e => onHandleAdd(e)} value={id}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

Cards.defaultProps = {
  productInfo: {
    id: 0,
    name: "",
    price: 0,
    description: ""
  },
  setBadge: false
};

export default withRouter(Cards);
