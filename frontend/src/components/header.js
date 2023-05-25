import React, {useState} from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header(){
    const [ismobile,setIsMobile]=useState(false);

    return(
        <div className="nava-bar">
            <div className="nava-logo">
                house2villa.com
            </div>
            <div className={ismobile?"nava-link mobile-nava-link" : "nava-link"}>
                <ul>
                    <li><Link to="/" className="nava-links">Home</Link></li>
                    <li><Link to="/about" className="nava-links">About</Link></li>
                    <li><Link to="/products" className="nava-links">Products</Link></li>
                    <li><Link to="/login" className="nava-links">Login</Link></li>
                </ul>
            </div>
            <div className="nava-icons">
            <div className="cart">
                <li><Link to="/"><i class="fa-solid fa-cart-shopping"></i></Link></li>
            </div>
            <div className="toggler">
            <i class="fa-solid fa-bars" onClick={()=>{setIsMobile(!ismobile)}}></i>
            </div>
            </div>
        </div>
    );
}

export default Header;