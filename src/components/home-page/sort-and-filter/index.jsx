import React from "react";
import "./index.modules.scss";
import { withRouter } from "react-router-dom";
const SortAndFilter = props => {
  const SELECT_SORT = [
    {value: "Select"},
    { value: "Highest to lowest" },
    { value: "Lowest to highest" }
  ];
  const onSortChange = event => {
    event.preventDefault();
    if (event.target.value !== null) {
      props.setName(event.target.value);
      if (event.target.value === "Highest to lowest") {
        let sortedData = props.data.sort((a, b) => {
          return b.price - a.price;
        });
        props.setData(sortedData);
      }
      if (event.target.value === "Lowest to highest") {
        let sortedData = props.data.sort((a, b) => {
          return a.price - b.price;
        });
        props.setData(sortedData);
      }
    }
  };
  const onHandleCategories = () => {
    props.setIsCategoryListOpen(true);
  };
  return (
    <div className="sort-container">
      <div className="category-link" onClick={onHandleCategories}>
        Choose Categories
      </div>
      <div className="header-sort">Sort By</div>
      <select
        className="custom-select"
        onChange={e => onSortChange(e)}
        value={props.name}
      >
        {SELECT_SORT.map((item, key) => {
          return (
            <option key={key} value={item.value}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default withRouter(SortAndFilter);
