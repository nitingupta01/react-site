import React from "react";
import "./aboutcontent.css"

function AboutContent(){
    const image="https://thumbs.dreamstime.com/b/frame-mockup-contemporary-living-room-design-two-vertical-frames-white-wall-background-modern-home-accessories-198525813.jpg";
    return(
        <div className="about-box">
        <div className="main-box">
            <div className="first-box">
                <h1>ABOUT US</h1>
                <p>Important disclosure: Please read before proceeding</p>
                <p>We’re proud affiliates for some of these products, meaning if you click for a product and make a purchase, we earn a commission at no extra cost to you. Our recommendations are based of deep experience with and knowledge of these companies and their products, and we recommend them because they are genuinely helpful and useful, not because of the small commissions we may receive. Please don’t spend any money on these products unless you believe they will help you achieve your goals.
                </p>
            </div>
            <div className="second-box">
                <img src={image} alt="About Us"/>
            </div>
        </div>
        </div>
    )
}

export default AboutContent;