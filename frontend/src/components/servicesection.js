import React from "react";
import Info from "./servicesinfo";
import ServiceCard from "./servicecard";
import "./servicesection.css"
import Heading from "./heading";

function createCard(item){
    return(
        <ServiceCard
            key={item.id}
            logo={item.logo}
            description={item.description}
        />
    )
}

function ServiceSection(){
    return(
        <div className="service-section">
        <Heading
        head={"OUR SERVICES"}
        />
        <div className="service-body">
            {Info.map(createCard)}
        </div>
        </div>
    )
}

export default ServiceSection;