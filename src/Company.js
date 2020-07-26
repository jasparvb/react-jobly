import React from "react";
import JobCard from './JobCard';

function Company({companies}) {
    const { handle } = useParams();

    let company = companies.find(company => company.handle === handle);
    if (!company) return <Redirect to="/companies" />;
    return (
        <div className="Company col-md-8 offset-md-2">
            <h5 class="text-capitalize">{company.name}</h5>
            {company.jobs.map(j => 
                <JobCard 
                    key={j.id} 
                    title={j.title} 
                    salary={j.salary} 
                    equity={j.equity} 
                />
            )}
        </div>
    );
}

export default Company;