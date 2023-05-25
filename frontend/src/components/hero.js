import React from "react";
import {Parallax} from "react-parallax";
import { Link } from "react-router-dom";
import "./hero.css";

function Hero(){
    const image="https://wallpaperaccess.com/full/2076086.jpg";
    return(
        <Parallax bgImage={image} strength={300}>
            <div className="hero-div">
                <div className="hero-content">
                    <h1 className="hero-head">Luxury</h1>
                    <h1 className="hero-head">Redefined</h1>
                    <p className="hero-subhead">Premium Furniture Collection</p>
                    <Link to="/products" className="hero-shopnow" ><button className="hero-button">SHOP NOW </button></Link>
                </div>
            </div>
        </Parallax>
    )
}

export default Hero;