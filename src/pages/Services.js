import React from "react";
import { ServicesList } from "../helpers/ServicesList";
import ServiceListing from "../components/ServiceListing";
import "../styles/Services.css";

function Services() {
    return (
        <div className="services">
            <h1 className="servicesHeading">Services Offered</h1>
            <div className="servicesList">
                { ServicesList.map((serviceListing, key) => {
                    return <ServiceListing
                        key={key}
                        image={serviceListing.image}
                        name={serviceListing.name}
                        description={serviceListing.description}
                        price={serviceListing.price}
                    />
                })}
            </div>
        </div>
    );
}

export default Services