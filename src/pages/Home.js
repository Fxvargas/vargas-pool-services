import React from "react";
import { Link } from "react-router-dom";
import PlaceholderImage from "../assets/img/home/placeholder-image.jpg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${PlaceholderImage})`}}>
            <div className="headerContainer">
                <h1>Vargas Pool Services</h1>
                <p>We offer many pool services.</p>
                <Link to="/services">
                    <button>Services</button>
                </Link>
                <Link to="/contact">
                    <button>Contact Us</button>
                </Link>
            </div>
        </div>
    );
}

export default Home