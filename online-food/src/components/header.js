import React from "react";
import logo from "./img/logo.png";

function Header() {
    return(
        <div className="header">
            <a href="#"><img src={logo} /></a>
            <h1>CLOUD KITCHEN</h1>
        </div>
    );
}

export default Header;