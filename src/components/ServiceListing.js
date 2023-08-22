import React from "react";

function ServiceListing({image, name, description, price}) {
    return (
        <div className="serviceListing">
            <div style={{ backgroundImage: `url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>${price}</p>

        </div>
    );
}

export default ServiceListing