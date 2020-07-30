import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobCard from './JobCard';
import UserContext from "./UserContext";

function Company() {
    const { handle } = useParams();
    const { user } = useContext(UserContext);

    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompany() {
            const { jobs } = user;
            const company = await JoblyApi.getCompany(handle);
      
            // make set of IDs of jobs applied to
            const jobsApplied = new Set(jobs.map(job => job.id));
      
            // add key for each job in company if it is applied to
            company.jobs = company.jobs.map(job => ({
              ...job,
              state: jobsApplied.has(job.id) ? 'applied' : null
            }));
      
            setCompany(company);
        }
        getCompany();
    }, [handle, user]);

    async function apply(id) {
        if(company.jobs.some(j => j.id === id && !j.state)) {
            let message = await JoblyApi.apply(id);
            let newCompany = { ...company };
            newCompany.jobs = newCompany.jobs.map(job =>
              job.id === id ? { ...job, state: message } : job
            );
            setCompany(newCompany);
        }
    }

    if (!company) {
        return <div>Loading...</div>;
    }
        
    return (
        <div className="Company col-md-8 offset-md-2">
            <h5 className="text-capitalize">{company.name}</h5>
            <p>{company.description}</p>
            {company.jobs.map(j => 
                <JobCard 
                    key={j.id} 
                    title={j.title} 
                    salary={j.salary} 
                    equity={j.equity} 
                    applied={j.state}
                    handleApply={() => apply(j.id)}
                />
            )}
        </div>
    );
}

export default Company;