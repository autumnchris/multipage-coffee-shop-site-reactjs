import React from 'react';

const HeroBanner = ({ heading, imageFile }) => {
  return (
    <section className="hero-banner">
      <div className="hero-banner-image" style={{ backgroundImage: `url(${imageFile})` }}></div>
      <div className="hero-banner-content">
        <h2>{heading}</h2>
      </div>
    </section>
  );
}

export default HeroBanner;