import React, { useState, useEffect } from "react";
import Search from './Search';
import JobCard from './JobCard';
import JoblyApi from "./JoblyApi";

function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs({});
    }, []);

    async function getJobs(search) {
        let jobs = await JoblyApi.getJobs(search);
        setJobs(jobs)
    }

    async function apply(id) {
        let message = await JoblyApi.applyToJob(id);
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
                    apply={apply} 
                />
            )}
        </div>
    );
}

export default Jobs;