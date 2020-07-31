import React from "react";
import { render } from "@testing-library/react";
import Companies from "./Companies";

it("renders without crashing", function() {
  render(<Companies />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Companies />);
  expect(asFragment()).toMatchSnapshot();
});
