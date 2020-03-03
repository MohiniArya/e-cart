import MyCart from "../index";
import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
const MyCartComp = (
    <Router>
      <MyCart />
    </Router>
  );
describe("Actions", () => {
    describe("Render", () => {
      it("should be a valid React Element", () => {
        expect(React.isValidElement(<MyCart />)).toBeTruthy();
      });
  
      it("should render without throwing an error", () => {
        expect(() =>
          ReactTestRenderer.create(MyCartComp)
        ).not.toThrow();
      });
    });
  
    describe("Snapshots", () => {
      it("matches the default snapshot", () => {
        const tree = ReactTestRenderer.create(MyCartComp).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });