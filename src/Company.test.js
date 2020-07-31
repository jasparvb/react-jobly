import React from "react";
import { render } from "@testing-library/react";
import Company from "./Company";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "./testHelper";

it("renders without crashing", function() {
  render(
    <MemoryRouter>
      <UserProvider>
        <Company />
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", function() {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <Company />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
