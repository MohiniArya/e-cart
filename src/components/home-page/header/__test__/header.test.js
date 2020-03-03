import React from "react";
import Header from "../index";
import ReactTestRenderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
const HeaderComp = (
    <Router>
      <Header />
    </Router>
  );
describe("Actions", () => {
    describe("Render", () => {
      it("should be a valid React Element", () => {
        expect(React.isValidElement(<Header />)).toBeTruthy();
      });
  
      it("should render without throwing an error", () => {
        expect(() =>
          ReactTestRenderer.create(HeaderComp)
        ).not.toThrow();
      });
    });
  
    describe("Snapshots", () => {
      it("matches the default snapshot", () => {
        const tree = ReactTestRenderer.create(HeaderComp).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });