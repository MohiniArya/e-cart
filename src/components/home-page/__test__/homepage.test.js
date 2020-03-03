import React from "react";
import ReactTestRenderer from "react-test-renderer";
import HomePage from "../index";
import { BrowserRouter as Router } from "react-router-dom";
const HomePageComp = (
    <Router>
      <HomePage />
    </Router>
  );
describe("Actions", () => {
    describe("Render", () => {
      it("should be a valid React Element", () => {
        expect(React.isValidElement(<HomePage />)).toBeTruthy();
      });
  
      it("should render without throwing an error", () => {
        expect(() =>
          ReactTestRenderer.create(HomePageComp)
        ).not.toThrow();
      });
    });
  
    describe("Snapshots", () => {
      it("matches the default snapshot", () => {
        const tree = ReactTestRenderer.create(HomePageComp).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });