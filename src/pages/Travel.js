import React from "react";
import './css/Travel.css';

const Travel = () => {
  return (
    <div className="container">
      

      {/* Reserve Section */}
      <section className="section reserve">
        <h2>Reserve</h2>
        <p>
          Plan your ride in advance with our easy-to-use reservation system. 
          Book your cab now to enjoy a hassle-free travel experience.
        </p>
        <img 
          src="./images/reserve.jpeg" 
          alt="Reserve your ride" 
        />
      </section>

      {/* Airport Section */}
      <section className="section airport">
        <h2>Airport</h2>
        <p>
          Experience seamless airport transfers with Rebol Cabs. 
          Whether you're arriving or departing, we'll ensure you reach your destination on time.
        </p>
        <img 
          src="./images/airport.jpeg" 
          alt="Airport transfers" 
        />
      </section>

      {/* Cities Section */}
      <section className="section cities">
        <h2>Cities</h2>
        <p>
          Explore cities with ease using Rebol Cabs. Our services cover major urban areas, 
          making it simple to navigate and enjoy your journey.
        </p>
        <img 
          src="./images/fcity.jpeg" 
          alt="Explore cities" 
        />
      </section>
    </div>
  );
};

export default Travel;
