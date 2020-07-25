import React from "react";
import Search from './Search';
import CompanyCard from './CompanyCard';

function Companies({companies}) {
    return (
        <div className="Companies">
            <Search />
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