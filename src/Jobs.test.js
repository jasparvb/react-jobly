import React from "react";
import { render } from "@testing-library/react";
import Jobs from "./Jobs";
import UserProvider from './testHelper';
import { MemoryRouter } from "react-router";
import { act } from "react-dom/test-utils";

act(() => {
    render(<Jobs />);
});


test("renders without crashing", function() {
    render(
        <MemoryRouter>
            <UserProvider>
                <Jobs />
            </UserProvider>
        </MemoryRouter>
    );
});

test("matches snapshot with no jobs", function() {
        const { asFragment } = render(
            <MemoryRouter>
                <UserProvider>
                    <Jobs />
                </UserProvider>
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
});