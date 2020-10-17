import React, {useRef, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"
import logo from "./logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerMenu = useRef(null);
    const menuClickHandler = () => {
        const bars = Array.from(hamburgerMenu.current.children);
        if(isOpen) {
            setIsOpen(false)
            bars[0].classList.remove("rotate-down");
            bars[1].style.opacity = "1";
            bars[2].classList.remove("rotate-up");
        } else {
            setIsOpen(true)
            bars[0].classList.add("rotate-down")
            bars[1].style.opacity = "0";
            bars[2].classList.add("rotate-up")
        }
    }

    return (
        <nav className="navbar navbar-light bg-light shadow-sm">
            <a href="/" className="navbar-brand text-capitalize">
                <img src={logo} alt="brand-logo" className="d-inline-block mr-3" width="35px"/>
                welcome
            </a>
            <div className="d-md-none" ref={hamburgerMenu} onClick={menuClickHandler}>
                <span className="d-block bg-secondary mb-1 bar"></span>
                <span className="d-block bg-secondary mb-1 bar"></span>
                <span className="d-block bg-secondary mb-1 bar"></span>
            </div>
        </nav>
    )
}

export default Navbar;