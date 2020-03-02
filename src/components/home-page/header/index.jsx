import React from "react";
import "./index.modules.scss";
import { withRouter,Link } from "react-router-dom";
const Header = props => {
  const {setData ,badge} = props;
  const onSearchChange = event => {
    let Products = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];
    let SearchData = Products.filter(function(user) {
      user.name = user.name.toLowerCase();
      return user.name.indexOf(event.target.value) > -1;
    });
    setData(SearchData);
  };
  return (
    <div className="header-container">
      <div className="title"> MyCart </div>
      <div className="search-bar">
        <input type="text" onChange={onSearchChange} />
      </div>
      <div className="cart-img">
        <Link to="/view-cart">
          <img src="/images/cart.png" alt="logo" />
          <span className="badge">{badge}</span>
        </Link>
      </div>
      <div></div>
    </div>
  );
};
export default withRouter(Header);
