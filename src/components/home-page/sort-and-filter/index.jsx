import React from "react";
import "./index.modules.scss";
import { withRouter } from "react-router-dom";
const SortAndFilter = props => {
  const SELECT_SORT = [
    { value: "Highest to lowest" },
    { value: "Lowest to highest" }
  ];
  const onSortChange = async event => {
    event.preventDefault();
    props.setName(event.target.value);
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
      <select className="custom-select" onChange={e => onSortChange(e)} value={props.name}>
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
