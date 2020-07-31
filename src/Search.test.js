import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search";

it("renders without crashing", function() {
  render(<Search />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Search />);
  expect(asFragment()).toMatchSnapshot();
});
