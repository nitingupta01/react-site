import React from "react";
import "./footer.css";
function Footer(){
    return(
        <div className="footerr">
            <div className="footer-icons">
                <span className="icon-box"><i class="fa-brands fa-instagram"></i></span>
                <span className="icon-box"><i class="fa-brands fa-linkedin-in"></i></span>
                <span className="icon-box"><i class="fa-brands fa-facebook-f"></i></span>
            </div>
            <div className="footer-info">
                <span>Info</span> · <span>Support</span> · <span>Marketing</span>
            </div>
            <div className="footer-info">
                <span>Terms of Use</span> · <span>Privacy Policy</span>
            </div>
            <div className="copyright">
                © Copyright 2022
            </div>
        </div>
    )
}

export default Footer;