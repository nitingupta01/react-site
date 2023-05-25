import React from "react";
import {Parallax} from "react-parallax";
import "./abouthero.css";

function AboutHero(){
    const image="https://wallpaperaccess.com/full/2076086.jpg";
    return(
        <Parallax bgImage={image} strength={300}>
            <div className="about-hero-div">
                <div className="about-hero-content">
                    ABOUT US
                </div>
            </div>
        </Parallax>
    )
}

export default AboutHero;