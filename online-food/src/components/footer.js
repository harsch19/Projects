import React from "react";
import logo from "./img/logo.png"

function Footer() {
    return(
        <div className="footer">
            <div className="footer-logo">
            <img src={logo} alt="Restaurant Logo" />
            </div>
            <div className="copyright">© 2023 Example Restaurant. All rights reserved.<br/>Privacy Policy | Terms of Use | Site Map</div>
            <div className="footer-info">
            info@restaurant.com<br/>123 Some Street, Anytown, India<br/>(123) 456-7890
            </div>
        </div>
    );
}

export default Footer;