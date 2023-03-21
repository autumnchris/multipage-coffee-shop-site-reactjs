import React from 'react';
import HeroBanner from '../components/HeroBanner';
import aboutHeroBanner from '../assets/images/about-hero-banner.jpg';

const About = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="About Us" imageFile={aboutHeroBanner} />
    </React.Fragment>
  );
}

export default About;