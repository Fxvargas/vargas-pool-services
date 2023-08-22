import React from "react";
import Image from "../assets/img/contact/placeholder-image.jpg";
import "../styles/Contact.css";

function Contact() {


    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${Image})`}}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" action="#">
                    <label htmlFor="name" >Name</label>
                    <input name="name" id="name" placeholder="Enter your name" type="text" required />
                    <label htmlFor="email" >Email</label>
                    <input name="email" id="email" placeholder="Enter your email" type="email" />
                    <label htmlFor="number" >Phone number</label>
                    <input name="number" id="number" placeholder="Enter your number" type="number" required/>
                    <label htmlFor="message" >Message</label>
                    <textarea rows="6" id="message" placeholder="Enter message">
                        {" "}
                    </textarea>
                    <button type="submit"> Submit </button>
                </form>
            </div>
        </div>
    );
}

export default Contact