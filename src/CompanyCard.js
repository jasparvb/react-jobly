import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({handle, name, description, logo_url}) {
    return (
        <Link className="Card card" to={`/companies/${handle}`}>
            <div class="card-body">
                <h6 class="card-title d-flex justify-content-between">
                    <span class="text-capitalize">{name}</span>
                    <img src={logo_url} alt={`${name} Logo`} />
                </h6>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default CompanyCard;