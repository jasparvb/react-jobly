import React from "react";
import Search from './Search';
import JobCard from './JobCard';

function Jobs({jobs}) {
    return (
        <div className="Jobs col-md-8 offset-md-2">
            <Search search={search} />
            {jobs.map(j => 
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

export default Jobs;