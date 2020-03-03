import React from "react";
import Categories from "../index"
import ReactTestRenderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
const CategoriesComp = (
    <Router>
      <Categories />
    </Router>
  );
describe("Actions", () => {
    describe("Render", () => {
      it("should be a valid React Element", () => {
        expect(React.isValidElement(<Categories />)).toBeTruthy();
      });
  
      it("should render without throwing an error", () => {
        expect(() =>
          ReactTestRenderer.create(CategoriesComp)
        ).not.toThrow();
      });
    });
  
    describe("Snapshots", () => {
      it("matches the default snapshot", () => {
        const tree = ReactTestRenderer.create(CategoriesComp).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });