import React from "react";
import { render } from "@testing-library/react";
import Jobs from "./Jobs";
import UserProvider from './testHelper';
import { MemoryRouter } from "react-router";

it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <UserProvider>
                <Jobs />
            </UserProvider>
        </MemoryRouter>
    );
});

it("matches snapshot with no jobs", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <Jobs />
            </UserProvider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});