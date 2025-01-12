import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css"; // Add corresponding CSS

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Section */}
        <div className="footer-section">
          <h3>Rebol Cabs</h3>
          <p>
            <Link to="/contact">Visit Help Center</Link>
          </p>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about" onClick={scrollToTop}>About Us</Link>
            </li>
            <li>
              <Link to="/services" onClick={scrollToTop}>Our Offerings</Link>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>
              <Link to="/Products" onClick={scrollToTop}>Ride</Link>
            </li>
            <li>
              <Link to="/Products" onClick={scrollToTop}>Packages</Link>
            </li>
          </ul>
        </div>

        {/* Travel Section */}
        <div className="footer-section">
          <h4>Travel</h4>
          <ul>
            <li>
              <Link to="/Travel" onClick={scrollToTop}>Reserve</Link>
            </li>
            <li>
              <Link to="/Travel" onClick={scrollToTop}>Airports</Link>
            </li>
            <li>
              <Link to="/Travel" onClick={scrollToTop}>Cities</Link>
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
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>📍 Hyderabad</p>
          </a>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Rebol Cabs</p>
        <p>
          <Link to="/PrivacyPolicy"  onClick={scrollToTop}>Privacy</Link> |{" "}
          <Link to="/AccessibilityStatement"  onClick={scrollToTop}>Accessibility</Link> |{" "}
          <Link to="/TermsAndConditions"  onClick={scrollToTop}>Terms</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
