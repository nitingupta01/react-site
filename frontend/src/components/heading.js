import React from "react";
import "./heading.css";

function Heading(props){
    return(
        <div className="section-heading">
            <h1>{props.head}</h1>
        </div>
    )
}

export default Heading;