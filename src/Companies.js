import React from "react";
import Search from './Search';
import CompanyCard from './CompanyCard';

function Companies({companies}) {
    return (
        <div className="Companies col-md-8 offset-md-2">
            <Search search={search} />
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