import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./css/ContactUs.css";

function ContactUsPage() {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!form.current.name.value || !form.current.email.value || !form.current.phone.value || !form.current.message.value) {
      setErrorMessage("All fields are required.");
      return;
    }

    emailjs
      .sendForm(
        "service_zcmaxm8", // Replace with your EmailJS Service ID
        "template_jhq9gqa", // Replace with your EmailJS Template ID
        form.current,
        "LEIPemJjjd4MoBoAP" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset();
          setErrorMessage("");
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setErrorMessage("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-us">
      <div className="hero-image">
        <img src="./images/contactus.jpg" alt="Contact Us" />
      </div>
      <h1>Contact Us</h1>
      <div className="contact-container">
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="from_name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="from_email" required />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="user_phone" required />
          </div>
          <div>
            <label htmlFor="userType">User Type:</label>
            <select id="userType" name="user_type">
              <option value="Captain">Customer</option>
              <option value="Customer">Captain</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-details">
          <div className="contactimage">
            <img src="./images/contactimage.jpg" alt="Contact Us" />
          </div>
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Reach us through the details below:</p>
          <ul>
            <li>
              <strong>Address:</strong>
              16 h, 8/2, Maruthi Nagar, New Santoshnagar, Santosh Nagar,
              Hyderabad, Telangana 500059
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+917207032809">+91 720 703 2809</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@rebolcabs.in">info@rebolcabs.in</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactUsPage;
