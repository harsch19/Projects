import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    );
}

export default Nav;