import React from 'react';
import './css/Services.css';

const ServicesPage = () => {
  return (
    <div >
      <div className="hero-image" > 
        <img src="./images/serviceshero.jpeg" alt="Rebol Services Hero" /> 
      </div>

      <div className="offerings-wrapper">
        <h1>Our Services</h1>
        <div className="offerings">

          {/* Offering 1 */}
          <div className="offering-card">
            <img 
              src="./images/cityride1.jpeg" 
              alt="Discover Your City with Rebol" 
              className="offering-image"
            />
            <h2>Discover Your City with Rebol</h2>
            <p>
              Get around your city quickly and comfortably with Rebol Cabs. Our reliable 
              drivers will get you to your destination safely and efficiently. Whether it's a 
              quick ride to the office or a leisurely trip to explore the city, Rebol Cabs 
              ensures convenience and comfort. With 24/7 availability and competitive pricing, 
              we are your trusted partner for all your commuting needs.
            </p>
            <ul>
              <li>Safe and reliable drivers
                <p>Our drivers undergo extensive background checks and rigorous training to ensure your safety and provide professional service. They are committed to making your journey secure and pleasant.</p>
              </li>
              <li>Quick and efficient service
                <p>Our advanced dispatch technology ensures that a cab is always just minutes away, minimizing wait times and optimizing routes for faster travel.</p>
              </li>
              <li>Affordable pricing
                <p>We offer transparent and competitive pricing, ensuring that you receive excellent service without breaking the bank. No hidden fees or surprises.</p>
              </li>
            </ul>
          </div>

          {/* Offering 2 */}
          <div className="offering-card">
            <img 
              src="./images/rentals.jpeg" 
              alt="Hit the Road with Rebol Rentals" 
              className="offering-image"
            />
            <h2>Hit the Road with Rebol Rentals</h2>
            <p>
              Planning a trip? Rebol Cabs offers car rentals to suit your needs. Choose from 
              our selection of well-maintained vehicles and enjoy the freedom of the road. 
              Whether you're heading out for a weekend getaway, a business trip, or a family 
              vacation, our rental cars are equipped to provide a smooth and enjoyable ride. 
              Flexible rental plans and premium customer support make your travel seamless.
            </p>
            <ul>
              <li>Wide range of vehicles
                <p>We offer a diverse fleet of vehicles, including economy cars, SUVs, and luxury models, catering to different preferences and group sizes.</p>
              </li>
              <li>Flexible rental plans
                <p>Whether you need a car for a few hours, a day, or a week, our customizable rental plans provide flexibility to match your schedule.</p>
              </li>
              <li>24/7 customer support
                <p>Our support team is always available to assist with bookings, address concerns, and provide on-road assistance whenever you need it.</p>
              </li>
            </ul>
          </div>

          {/* Offering 3 */}
          <div className="offering-card">
            <img 
              src="./images/courier.jpeg" 
              alt="Effortless Delivery, Every Time" 
              className="offering-image"
            />
            <h2>Effortless Delivery, Every Time</h2>
            <p>
              Need something delivered urgently and securely? Choose Rebol Couriers for fast 
              and efficient delivery services within the city. From important documents to 
              parcels of all sizes, our couriers ensure your deliveries reach their destination 
              on time. Our advanced tracking system keeps you updated on the delivery status, 
              providing peace of mind every step of the way.
            </p>
            <ul>
              <li>Same-day delivery options
                <p>Our expedited delivery services ensure that your urgent packages arrive at their destination within hours, meeting tight deadlines with ease.</p>
              </li>
              <li>Real-time tracking
                <p>Stay informed every step of the way with our advanced tracking system, which provides real-time updates on the status and location of your package.</p>
              </li>
              <li>Secure and reliable service
                <p>Your deliveries are handled with the utmost care and professionalism, ensuring safe and on-time arrivals every single time.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesPage;