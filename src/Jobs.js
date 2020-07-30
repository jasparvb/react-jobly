import React, { useContext, useState, useEffect } from "react";
import Search from './Search';
import JobCard from './JobCard';
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const { user } = useContext(UserContext);
    
    useEffect(() => {
        getJobs({});
    }, []);

    async function getJobs(search) {
        let jobs = await JoblyApi.getJobs(search);
        // make set of IDs of jobs applied to
        const jobsApplied = new Set(user.jobs.map(job => job.id));

        // add key for each job in company if it is applied to
        jobs = jobs.map(job => ({
            ...job,
            state: jobsApplied.has(job.id) ? 'applied' : null
        }));
        
        setJobs(jobs);
    }

    async function apply(id) {
        let message = await JoblyApi.apply(id);
        setJobs(j => j.map(job => 
          job.id === id ? { ...job, state: message} : job
        ));
    }

    return (
        <div className="Jobs col-md-8 offset-md-2">
            <Search search={getJobs} />
            {jobs.map(j => 
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

export default Jobs;