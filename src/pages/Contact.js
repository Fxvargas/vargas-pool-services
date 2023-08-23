import React, { useRef } from "react";
import Image from "../assets/img/contact/placeholder-image.jpg";
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_CONTACT_FORM_TEMPLATE, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
        return (
            <div className="contact">
                <div className="leftSide" style={{backgroundImage: `url(${Image})`}}></div>
                <div className="rightSide">
                    <h1>Contact Us</h1>
                    <form id="contact-form" action="#" ref={form} onSubmit={sendEmail}>
                        <label htmlFor="from_name">Name</label>
                        <input name="from_name" id="from_name" placeholder="Enter your name" type="text" required/>
                        <label htmlFor="from_email">Email</label>
                        <input name="from_email" id="from_email" placeholder="Enter your email" type="email"/>
                        <label htmlFor="from_number">Phone number</label>
                        <input name="from_number" id="from_number" placeholder="Enter your number" type="number" required/>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" rows="6" id="message" placeholder="Enter message"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
}

export default Contact