import React from "react";

function Header() {
    return(
        <div className="header">
            <a href="#"><img src={require("./img/logo.png")} /></a>
            <h1>CLOUD KITCHEN</h1>
        </div>
    );
}

export default Header;