import React, { useState } from "react";
import "./carousel.css";

function Carousel(){
    const SlideData=[
        {
            id:"1",
            image:"https://homedesignlover.com/wp-content/uploads/2013/07/6-Lincoln-Place.jpg"
    
        },
        {
            id:"2",
            image:"https://5.imimg.com/data5/VS/EW/JL/ANDROID-22722717/product-jpeg-500x500.jpg"
        }
        
    ];

    const len=SlideData.length;

    const[current,setCurrent]=useState(0);

    function nextSlide(){
        setCurrent(current===len-1? 0 : current+1);
    }

    function prevSlide(){
        setCurrent(current===0?len-1:current-1);
    }

    return(
        <div className="slider">
            <i class="fa-solid fa-circle-left left-arrow" onClick={prevSlide}></i>
            <i class="fa-solid fa-circle-right right-arrow" onClick={nextSlide}></i>

            {SlideData.map((slide,index)=>{
                return(
                    <div className={index===current?"slide active":"slide"} key={index}>
                         {index === current && (
              <img src={slide.image} alt='our work' className='image' />
            )}
                    </div>
                )
            })
            }

        </div>
    )

}

export default Carousel;