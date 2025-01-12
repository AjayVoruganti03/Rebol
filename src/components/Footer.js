import React from "react";
import "./Footer.css"; // Add corresponding CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Section */}
        <div className="footer-section">
          <h3>Rebol Cabs</h3>
          <p>
            <a href="/contact">Visit Help Center</a>
          </p>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Our Offerings</a>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>
              <a href="/Products">Ride</a>
            </li>
            <li>
              <a href="/Products">Packages</a>
            </li>
          </ul>
        </div>

        {/* Travel Section */}
        <div className="footer-section">
          <h4>Travel</h4>
          <ul>
            <li>
              <a href="/Travel">Reserve</a>
            </li>
            <li>
              <a href="/Travel">Airports</a>
            </li>
            <li>
              <a href="/Travel">Cities</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
        <div className="socail-container">
          <div className="footer-social">
            <a
          href="https://www.facebook.com/share/19yG7LFQV6/"
          target="_blank"
          rel="noopener noreferrer"
            >
          <img src="./images/facebook_logo.jpeg" alt="Facebook" />
            </a>
            <a
          href="https://www.linkedin.com/in/rebol-cabs-7a5334344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
            >
          <img src="./images/linkedin1.jpg" alt="LinkedIn" />
            </a>
            <a
          href="https://www.instagram.com/rebolcabs?igsh=MThsYzMyNWo4Nm9sdA=="
          target="_blank"
          rel="noopener noreferrer"
            >
          <img src="./images/instalogo.jpeg" alt="Instagram" />
            </a>
          </div>
          <div className="footer-location">
            <a
          href="https://maps.app.goo.gl/tN93MdPv5x99AztZ8?g_st=iw"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none",color: "white" }}
            >
          <p>📍 Hyderabad</p>
            </a>
          </div>
        </div>
        {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Rebol Cabs</p>
        <p>
          <a href="/PrivacyPolicy">Privacy</a> |{" "}
          <a href="/AccessibilityStatement">Accessibility</a> |{" "}
          <a href="/TermsAndConditions">Terms</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
