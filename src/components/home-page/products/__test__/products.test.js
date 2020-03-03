import React from "react";
import ProductContainer from "../index";
import ReactTestRenderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
const ProductContainerComp = (
    <Router>
      <ProductContainer />
    </Router>
  );
describe("Actions", () => {
    describe("Render", () => {
      it("should be a valid React Element", () => {
        expect(React.isValidElement(<ProductContainer />)).toBeTruthy();
      });
  
      it("should render without throwing an error", () => {
        expect(() =>
          ReactTestRenderer.create(ProductContainerComp )
        ).not.toThrow();
      });
    });
  
    describe("Snapshots", () => {
      it("matches the default snapshot", () => {
        const tree = ReactTestRenderer.create(ProductContainerComp ).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });