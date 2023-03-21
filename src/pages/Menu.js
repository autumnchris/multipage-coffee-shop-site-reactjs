import React from 'react';
import HeroBanner from '../components/HeroBanner';
import menuHeroBanner from '../assets/images/menu-hero-banner.jpg';

const Menu = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="Our Menu" imageFile={menuHeroBanner} />
    </React.Fragment>
  );
}

export default Menu;