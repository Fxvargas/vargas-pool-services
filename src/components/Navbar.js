import React, { useState } from "react";
import PlaceholderImage from "../assets/img/navbar/placeholder-image.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };

    return (
        <nav className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={PlaceholderImage} alt="logo" />
                <div className="hiddenLinks">
                    <Link to="/">HOME</Link>
                    <Link to="/services">SERVICES</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">HOME</Link>
                <Link to="/services">SERVICES</Link>
                <Link to="/contact">CONTACT</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </nav>
    );
}

export default Navbar