import React from "react";
import Carousel from "./carousel";
import Heading from "./heading";
import "./work.css";

function WorkSection(){
    return(
        <div className="work-section">
            <Heading head={"OUR WORK"}/>
            <div className="work-body">
                <Carousel />
            </div>
        </div>
    )
}

export default WorkSection;