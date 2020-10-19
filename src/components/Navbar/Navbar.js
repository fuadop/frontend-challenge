import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light shadow-sm">
            <a href="/" className="navbar-brand text-capitalize">
                <img src={logo} alt="brand-logo" className="d-inline-block mr-3" width="35px"/>
                welcome
            </a>
        </nav>
    )
}

export default Navbar;