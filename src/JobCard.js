import React from "react";

function JobCard({key, title, salary, equity, applied, apply}) {
    return (
        <div class="card-body">
            <h6 class="card-title d-flex justify-content-between">
                <span class="text-capitalize">{title}</span>
            </h6>
            <div>Salary: {salary}</div>
            <div>Equity: {equity}</div>
            <button class="btn btn-danger font-weight-bold text-uppercase float-right" 
                disabled={applied}
                onClick={() => apply(key)}
            >
                {applied ? "Applied" : "Apply"}
            </button>
        </div>
    );
}

export default JobCard;