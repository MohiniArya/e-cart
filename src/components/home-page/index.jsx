import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import ProductContainer from "./products";
import Categories from "./categories";
import "./index.modules.scss";
import SortAndFilter from "./sort-and-filter";
const HomePage = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("Lowest to highest");
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  let badgeArray = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const [badge, setBadge] = useState(badgeArray.length);

  const fetchData = async () => {
    const response = await axios.get("/api/products");
    localStorage.setItem("products", JSON.stringify(response.data.products));
    if (name === "Highest to lowest") {
      let sortedData = response.data.products.sort((a, b) => {
        return b.price - a.price;
      });
      setData(sortedData);
    }
    if (name === "Lowest to highest") {
      let sortedData = response.data.products.sort((a, b) => {
        return a.price - b.price;
      });
      setData(sortedData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
      debugger
    if (data.length > 0) {
      if (name === "Highest to lowest") {
        let sortedData = data.sort((a, b) => {
          return b.price - a.price;
        });
        setData(sortedData);
      }
      if (name === "Lowest to highest") {
        let sortedData = data.sort((a, b) => {
          return a.price - b.price;
        });
        setData(sortedData);
      }
    }
  }, [data, name,badge]);
  return (
    <div>
      <div className="HomePage">
        <Header data={data} setData={setData} badge={badge} />
        <div className="page-content">
          <Categories
            data={data}
            setData={setData}
            isCategoryListOpen={isCategoryListOpen}
            setIsCategoryListOpen={setIsCategoryListOpen}
          />
          <div className="product-filter">
            <SortAndFilter
              name={name}
              setName={setName}
              data={data}
              setData={setData}
              isCategoryListOpen={isCategoryListOpen}
              setIsCategoryListOpen={setIsCategoryListOpen}
            />
            <ProductContainer
              data={data}
              setData={setData}
              setBadge={setBadge}
              badge={badge}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
