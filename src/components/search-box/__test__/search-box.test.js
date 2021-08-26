import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import SearchBox from "../SearchBox.jsx";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("search input initially start with no value", () => {
  const { getByTestId } = render(<SearchBox />);
  expect(getByTestId("search-box__input")).toBeEmptyDOMElement();
});

test("passed default value to the search box should be rendered", () => {
  const { getByTestId } = render(<SearchBox searchValue="example" />);
  expect(getByTestId("search-box__input")).toHaveValue("example");
});
