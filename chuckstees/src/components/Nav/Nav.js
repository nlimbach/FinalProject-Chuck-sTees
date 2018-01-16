import React from "react";
import "./Nav.css";

const Nav = () => (
    <nav className="nav-wrapper">
        <a href="/" className="black-text col s12" id="navLogo">Chuck's Tees</a>
            <ul id="nav-mobile" className="navUl">
                <li><a href="/" className="navLinks">Profile</a></li>
                <li><a href="/" className="navLinks">Login</a></li>
                <li><a href="/" className="navLinks">Sign Up</a></li>
            </ul>
    </nav>
);

export default Nav;