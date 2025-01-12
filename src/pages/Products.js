import React from "react";
import "./css/Products.css";

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="products-title">Rides</h1>
      <div className="products-grid">
        <div className="product-card">
          <img src="./images/pbike.jpeg" alt="Bike" />
          <h2>Bike</h2>
          <p>
            Fast and affordable, our bike service is perfect for short distances
            and navigating traffic.
          </p>
        </div>

        <div className="product-card">
          <img src="./images/auto.jpeg" alt="Auto" />
          <h2>Auto</h2>
          <p>
            Reliable and convenient, our auto service is ideal for medium
            distances and comfortable rides.
          </p>
        </div>

        <div className="product-card">
          <img src="./images/car.jpeg" alt="Car" />
          <h2>Car</h2>
          <p>
            Enjoy a comfortable and spacious ride with our car service, perfect
            for long journeys and group travel.
          </p>
        </div>
      </div>
      <div className="product-card Packages">
        <h1>Packages</h1>
        <img src="./images/pdelivery.jpeg" alt="Delivery" />
        <h2>Package Delivery</h2>
        <p>
          Need to send a package? Our reliable delivery service ensures your
          items reach their destination safely and securely.
        </p>
      </div>
    </div>
  );
};

export default Products;
