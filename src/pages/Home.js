import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="headerContainer">
                <h1>Vargas Pool Services</h1>
            </div>
            <div className="overviewContainer">
                <p>The overview of our business will go here.</p>
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