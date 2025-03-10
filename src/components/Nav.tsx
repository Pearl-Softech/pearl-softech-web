import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuOnLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="nav-container">
            <div className="first-row">
                <div className="logo"><Link to="/"><span>PEARL </span>SOFTECH</Link></div>
                <div className="bar" onClick={toggleMenu}>
                    <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
                </div>
                <div className="links">
                <Link to={"/"} onClick={closeMenuOnLinkClick}>Home</Link>
                    <Link to={"/about"} onClick={closeMenuOnLinkClick}>About</Link>
                    <Link to={"/team"} onClick={closeMenuOnLinkClick}>Team</Link>
                    <Link to={"/contact"} onClick={closeMenuOnLinkClick} className="contact"><div className="contact">Contact</div></Link>
                </div>
            </div>

            {isMenuOpen && (
                <div className="second-row">
                    <Link to={"/"} onClick={closeMenuOnLinkClick}>Home</Link>
                    <Link to={"/about"} onClick={closeMenuOnLinkClick}>About</Link>
                    <Link to={"/team"} onClick={closeMenuOnLinkClick}>Team</Link>
                    <Link to={"/contact"} onClick={closeMenuOnLinkClick}>Contact</Link>
                </div>
            )}
        </div>
    );
};

export default Nav;
