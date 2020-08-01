import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import { MemoryRouter } from "react-router";

it("renders without crashing", function() {
  render(
    <MemoryRouter>
      <JobCard />
    </MemoryRouter>
  );
});

it("matches snapshot for job", function() {
  const { asFragment } = render(
    <MemoryRouter>
      <JobCard title="Software Engineer" salary="150000" equity="5" />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
