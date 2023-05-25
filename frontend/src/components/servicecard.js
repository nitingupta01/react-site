import React from "react";
import "./servicecard.css"

function ServiceCard(props){
    return(
        <div className="service-card">
            <div className="service-logo">
                <i className={props.logo}></i>
            </div>
            <div className="service-description">
                {props.description}
            </div>
        </div>
    )
}

export default ServiceCard;