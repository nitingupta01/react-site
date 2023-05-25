import React from "react";
import AboutContent from "./aboutcontent";
import AboutHero from "./abouthero";
import Footer from "./footer";
import Header from "./header";

function About(){
    return(
        <div>
        <Header />
        <AboutHero/>
        <AboutContent/>
        <Footer/>
        </div>
    )
}

export default About;