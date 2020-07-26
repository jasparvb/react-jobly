import React from "react";

function JobCard({key, title, salary, equity, user}) {
    let applied = user.jobs.some(j => j.id === key);
    return (
        <div class="card-body">
            <h6 class="card-title d-flex justify-content-between">
                <span class="text-capitalize">{title}</span>
            </h6>
            <div>Salary: {salary}</div>
            <div>Equity: {equity}</div>
            {applied 
                ? <button class="btn btn-danger font-weight-bold text-uppercase float-right" disabled="">Applied</button>
                : <button class="btn btn-danger font-weight-bold text-uppercase float-right">Apply</button>
            }
            
        </div>
    );
}

export default JobCard;