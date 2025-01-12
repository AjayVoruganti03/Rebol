import React, { useState } from "react";
import "./css/HomePage.css";

const HomePage = () => {
  const [isCustomer, setIsCustomer] = useState(true); // State to toggle between Customers and Captains

  const customerFeatures = [
    {
      icon: "🚕",
      title: "Affordable Rides",
      description:
        "Enjoy budget-friendly rides with transparent pricing and no hidden charges.",
    },
    {
      icon: "🕒",
      title: "24/7 Availability",
      description:
        "We're here for you any time of the day or night, no matter where you're going.",
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description:
        "Travel worry-free with real-time tracking, verified drivers, and reliable service.",
    },
    {
      icon: "🌍",
      title: "Eco-Friendly Options",
      description:
        "Choose our green rides to reduce your carbon footprint and travel responsibly.",
    },
  ];

  const captainFeatures = [
    {
      icon: "💼",
      title: "Flexible Working Hours",
      description: "Work at your own convenience and earn at your pace.",
    },
    {
      icon: "💸",
      title: "Earn More",
      description: "Get competitive earnings with incentives and rewards.",
    },
    {
      icon: "📈",
      title: "Growth Opportunities",
      description: "Upskill with training programs and grow your career.",
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description:
        "Experience a safe and reliable platform for all your trips.",
    },
  ];

  const features = isCustomer ? customerFeatures : captainFeatures;

  // Function to check if the app is installed (implementation needed)
  const isAppInstalled = () => {
    // You will need to implement this function based on how you want to
    // check for app installation.
    // Some possible approaches:
    // 1. Check for a specific cookie or local storage value set by your app.
    // 2. Use a browser API (like `navigator.userAgent`) to check if the app is
    //    installed (this may not be reliable).
    // 3. Use a third-party library to detect app installation.
    // ... Your code here ...
    return false; // Placeholder - Replace with your actual logic
  };

  const handleRideNowClick = () => {
    if (isAppInstalled()) {
      // Open the app using the custom URL scheme
      window.location.href = "your-app-scheme://"; // Replace with your app's scheme
    } else {
      // Redirect to the Play Store
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.rebolcabuser.user";
    }
  };

  const handleBookRideClick = () => {
    if (isAppInstalled()) {
      window.location.href = "your-app-scheme://"; // Replace with your app's scheme
    } else {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.rebolcabuser.user";
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Journey, Our Priority - Ride with Rebol Cabs</h1>
          <p>
            Fast, reliable, and affordable cab services designed to meet your
            every need. Whether it's a city ride, an airport transfer, or an
            outstation trip, we've got you covered.
          </p>
          <button className="ride-button" onClick={handleRideNowClick}>
            Ride Now
          </button>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="key-features">
        <h2 style={{ fontFamily: "Arial, sans-serif", fontSize: "30px" }}>
          Why Choose Rebol Cabs?
        </h2>
        <div className="toggle-buttons">
          <button
            className={`toggle-button ${isCustomer ? "active" : ""}`}
            onClick={() => setIsCustomer(true)}
          >
            Customers
          </button>
          <button
            className={`toggle-button ${!isCustomer ? "active" : ""}`}
            onClick={() => setIsCustomer(false)}
          >
            Captains
          </button>
        </div>
        <div className="feature-cards">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 style={{ fontFamily: "Arial, sans-serif", fontSize: "30px" }}>
          Our Services
        </h2>
        <div className="service-cards">
          <div className="service-card">
            <img
              src="./images/cityride1.jpeg"
              alt="City Ride"
              className="service-image"
            />
            <h3>Discover Your City with Rebol</h3>
            <p>
              Get around your city quickly and comfortably with Rebol Cabs. Our
              reliable drivers will get you to your destination safely and
              efficiently.
            </p>
            <button
              className="service-button"
              onClick={() => {
                window.location.href = "/services";
                window.scrollTo(0, 0);
              }}
            >
              Learn More
            </button>
          </div>
          <div className="service-card">
            <img
              src="./images/rentals.jpeg"
              alt="Outstation Trip"
              className="service-image"
            />
            <h3>Hit the Road with Rebol Rentals</h3>
            <p>
              Planning a trip? Rebol Cabs offers car rentals to suit your needs.
              Choose from our selection of well-maintained vehicles and enjoy
              the freedom of the road.
            </p>
            <button
              className="service-button"
              onClick={() => {
                window.location.href = "/services";
                window.scrollTo(0, 0);
              }}
            >
              Explore Rentals
            </button>
          </div>
          <div className="service-card">
            <img
              src="./images/courier.jpeg"
              alt="Airport Transfer"
              className="service-image"
            />
            <h3>Effortless Delivery, Every Time</h3>
            <p>
              Need something delivered urgently and securely? Choose Rebol
              Couriers for fast and efficient delivery services within the city.
            </p>
            <button
              className="service-button"
              onClick={() => {
                window.location.href = "/services";
                window.scrollTo(0, 0);
              }}
            >
              Book Delivery
            </button>
          </div>
        </div>
      </section>

      {/* Booking Steps Section */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        How It Works
      </h2>
      <section className="booking-steps">
        <div className="step-container">
          <div className="left-steps">
            <div className="step1">
              <h3>1. Choose Your Ride</h3>
              <p>Select from a range of cab options based on your needs.</p>
            </div>
            <div className="step2">
              <h3>2. Enter Your Details</h3>
              <p>
                Provide your pick-up location, destination, and preferred time.
              </p>
            </div>
          </div>
          <div className="right-steps">
            <div className="step3">
              <h3>3. Confirm Your Booking</h3>
              <p>Get an instant confirmation and receive real-time updates</p>
            </div>
            <div className="step4">
              <h3>4. Enjoy Your Ride</h3>
              <p>Sit back, relax, and let us take care of your journey.</p>
            </div>
          </div>
        </div>
        <button className="ride-button" onClick={handleBookRideClick}>
          Book a Ride Now
        </button>
      </section>

      {/* Experience Section */}
      <section className="photo-description">
        <div className="photo-container">
          <img src="./images/customercab.jpg" alt="Rebol Cabs Experience" />
        </div>
        <div className="description-container">
          <h2>Experience the Difference with Rebol Cabs</h2>
          <p>
            Our mission is to provide seamless and safe travel experiences for
            everyone. With our user-friendly booking platform, verified drivers,
            and commitment to customer satisfaction, we go the extra mile to
            make your journey memorable.
          </p>
          <button
            className="learn-more-button"
            onClick={() => {
              window.location.href = "/about";
              window.scrollTo(0, 0);
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Download the App Section */}
      <section className="download-app">
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Things are easier to do on the apps
        </h2>
        <div className="app-cards">
          <div className="app-card">
            <img src="./images/customer_qr.png" alt="Uber App QR Code" />
            <h3>Scan to get the Customer app</h3>
          </div>
          <div className="app-card">
            <img src="./images/captain_qr.png" alt="Driver App QR Code" />
            <h3>Scan to get the Driver app</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
