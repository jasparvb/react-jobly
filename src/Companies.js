import React, { useState, useEffect } from "react";
import Search from './Search';
import CompanyCard from './CompanyCard';
import JoblyApi from "./JoblyApi";

function Companies() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getCompanies();
    }, []);

    async function getCompanies(search) {
        let companies = await JoblyApi.getCompanies(search);
        setCompanies(companies)
    }

    return (
        <div className="Companies col-md-8 offset-md-2">
            <Search search={getCompanies} />
            {companies.map(c => 
                <CompanyCard 
                    key={c.handle} 
                    name={c.name} 
                    description={c.description} 
                    logo_url={c.logo_url} 
                />
            )}
        </div>
    );
}

export default Companies;