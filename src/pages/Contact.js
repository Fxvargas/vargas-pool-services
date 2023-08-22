import React, { useState } from "react";
import Image from "../assets/img/contact/placeholder-image.jpg";
import "../styles/Contact.css";

function Contact() {

    const [formState, setFormState] = useState({});





    const changeHandler = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const config = {
            Username: process.env.USERNAME,
            Password: process.env.PASSWORD,
            Host: "",
            Port: "",
            SecureToken: process.env.TOKEN,
            To: process.env.USERNAME,
            From: formState.email,
            Subject: "Subject",
            Body: `${formState.name}`
        };
      if(window.Email) {
          window.Email.send(config);
      }
    }

    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${Image})`}}></div>
            <div className="rightSide">
                <h1>Contact US</h1>
                <form id="contact-form" method="POST" onSubmit={submitHandler}>
                    <label htmlFor="name" >Name</label>
                    <input name="name" placeholder="Enter your name" type="text" onSubmit={changeHandler} required />
                    <label htmlFor="email" >Email</label>
                    <input name="email" placeholder="Enter your email" type="email" onSubmit={changeHandler} />
                    <label htmlFor="number" >Phone number</label>
                    <input name="number" placeholder="Enter your number" type="number" required/>
                    <label htmlFor="message" >Message</label>
                    <textarea rows="6" placeholder="Enter message">
                        {" "}
                    </textarea>
                    <button type="submit"> Submit </button>
                </form>
            </div>
        </div>
    );
}

export default Contact