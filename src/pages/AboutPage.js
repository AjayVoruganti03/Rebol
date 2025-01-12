import React from "react";
import "./css/AboutUs.css";

function AboutPage() {
  return (
    <section className="about-us">
      <div className="hero-image">
        <img src="./images/aboutus.jpeg" alt="Rebol Cabs" />
      </div>
      <div className="about-us-content">
        <h1>About Rebol Cabs</h1>
        <p>
          Rebol Cabs is a technology-driven ridesharing platform connecting
          passengers with drivers for safe, efficient, and reliable
          transportation solutions. Operating under REBOL MULTI SERVICES Pvt.
          Ltd., we are dedicated to redefining urban mobility across India with
          user-friendly features and innovative solutions. Founded in 2024 and
          headquartered in Hyderabad, we offer real-time ride tracking,
          emergency support, and strive for affordable, reliable, and
          eco-friendly transportation options.
        </p>

        <h2>Our Mission & Vision</h2>
        <div className="mv-image">
          <img src="./images/mv.jpeg" alt="Rebol Cabs" />
        </div>
        <div className="mission-vision">
          <div className="column">
            <h3>Mission</h3>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Provide safe and reliable transportation for everyone.</li>
              <li>Offer affordable and accessible mobility solutions.</li>
              <li>Enhance user experiences through innovative technology.</li>
            </ul>
          </div>
          <div className="column">
            <h3>Vision</h3>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Be India's leading ride-hailing service.</li>
              <li>Foster sustainable and eco-friendly urban transportation.</li>
              <li>Build trust and loyalty through exceptional service.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
