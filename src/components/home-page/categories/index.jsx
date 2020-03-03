import React from "react";
import "./index.modules.scss";
import { withRouter } from "react-router-dom";
const Categories = props => {
  const Categories = [
    { value: "All" },
    { value: "Electronics" },
    { value: "Food Essentials" },
    { value: "Home & furniture" },
    { value: "Fashion" },
    { value: "Sports" }
  ];

  const {
    setIsCategoryListOpen,
    isCategoryListOpen,
    setName,
    setData,
    screener,
    setScreener
  } = props;

  const getNewList = name => {
    setName("Select");
    setIsCategoryListOpen(false);
    setScreener(name);
    let Products = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];
    if (name === "All") {
      setData(Products);
    } else {
      let newCollection = Products.filter(item => item.category === name);
      setData(newCollection);
    }
  };

  const onHandleClick = event => {
    const { value } = event.target;
    switch (value) {
      case "Electronics":
        getNewList("Electronics");
        break;
      case "Food Essentials":
        getNewList("Food Essentials");
        break;
      case "Home & furniture":
        getNewList("Home & furniture");
        break;
      case "Fashion":
        getNewList("Fashion");
        break;
      case "Sports":
        getNewList("Sports");
        break;
      default:
        getNewList("All");
        break;
    }
  };
  const onHandleCloseCategory = () => {
    setIsCategoryListOpen(false);
  };

  return (
    <div
      className={`${
        window.innerWidth > 720 || isCategoryListOpen === true
          ? "multiple-categories"
          : "multiple-categories-hidelist"
      }`}
    >
      <div className="close-category-icon" onClick={onHandleCloseCategory}>
        <img src="/images/close-icon.png" alt="close-icon" />
      </div>
      {Categories.map((lable, index) => {
        return (
          <div className="categories-label" key={index}>
            <input
              type="radio"
              label={lable.item}
              name="formHorizontalRadios"
              value={lable.value}
              id={index}
              onClick={e => onHandleClick(e)}
              defaultChecked={screener === lable.value ? true : false}
            />
            <label className="radio-lable">{lable.value}</label>
          </div>
        );
      })}
    </div>
  );
};
export default withRouter(Categories);
