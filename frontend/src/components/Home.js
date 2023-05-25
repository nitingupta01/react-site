import React from "react";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import ServiceSection from "./servicesection";
import WorkSection from "./work";

function Home(){
    return(
        <div>
        <Header />
        <Hero/>
        <ServiceSection/>
        <WorkSection/>
        <Footer/>
        </div>
    )
}

export default Home;