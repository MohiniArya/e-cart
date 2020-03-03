import React from "react";
import "./index.modules.scss";
import Cards from "./cards";
import { withRouter } from "react-router-dom";
const ProductContainer = props => {
  const { data, setBadge, badge } = props;

  return (
    <div className="Products-list">
      {data &&
        data.map((item, index) => {
          return (
            <Cards
              productInfo={item}
              setBadge={setBadge}
              badge={badge}
              key={index}
            />
          );
        })}
    </div>
  );
};
export default withRouter(ProductContainer);
