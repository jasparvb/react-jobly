import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("renders without crashing", function() {
    render(
        <MemoryRouter>
        <CompanyCard />
        </MemoryRouter>
    );
});

it("matches snapshot for company", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyCard 
                handle="walmart" 
                name="Walmart" 
                description="Family Company" 
                logo_url="http://walmart.com/image.jpg" 
            />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});
