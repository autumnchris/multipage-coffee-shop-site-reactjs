import React from 'react';
import HeroBanner from '../components/HeroBanner';
import visitHeroBanner from '../assets/images/visit-hero-banner.jpg';

const Visit = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="Visit Us" imageFile={visitHeroBanner} />
      <section className="main-content visit">
        <h3>Hours</h3>
        <p>DAILY 7AM - 8PM</p>
        <h3>Phone</h3>
        <p>
          <address>
            <a href="tel:5555555555">(555) 555-5555</a>
          </address>
        </p>
        <h3>Email</h3>
        <p>
          <address>
            <a href="mailto:coffee.grounds@realemail.com">coffee.grounds@realemail.com</a>
          </address>
        </p>
        <h3>Location</h3>
        <p>
          <address>555 Espresso Lane Mochaville FL 55555</address>
        </p>
      </section>
    </React.Fragment>
  );
}

export default Visit;