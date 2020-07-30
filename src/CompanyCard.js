import React from "react";
import { Link } from "react-router-dom";
import './CompanyCard.scss';
import defaultLogo from "./default-logo.png";

function CompanyCard({handle, name, description, logo_url}) {
    return (
        <Link className="Card card my-2" to={`/companies/${handle}`}>
            <div className="card-body">
                <h3 className="card-title d-flex justify-content-between">
                    <span className="text-capitalize">{name}</span>
                    <img src={logo_url || defaultLogo} alt={`${name} Logo`} />
                </h3>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default CompanyCard;