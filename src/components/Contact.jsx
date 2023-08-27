import React, { useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import contact from "../assets/contact-img.png";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message Send");

    emailjs
      .sendForm(
        "service_7rk3jdo",
        "template_tnjphyi",
        form.current,
        "CIzX1vDlHf78mfluE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <div className="contact_detail">
        <div className="cimage">
          <img src={contact} alt="contact" />
        </div>
        <div className="form_control">
          <form onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" required />
            <label htmlFor="text">Message</label>
            <textarea id="message" name="message" rows="8" required />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Contact;
