import React from "react";
import Cart from "../index";
import ReactTestRenderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
const CartComp = (
    <Router>
      <Cart />
    </Router>
  );
describe("Actions", () => {
    describe("Render", () => {
      it("should be a valid React Element", () => {
        expect(React.isValidElement(<Cart />)).toBeTruthy();
      });
  
      it("should render without throwing an error", () => {
        expect(() =>
          ReactTestRenderer.create(CartComp)
        ).not.toThrow();
      });
    });
  
    describe("Snapshots", () => {
      it("matches the default snapshot", () => {
        const tree = ReactTestRenderer.create(CartComp).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });