import React from 'react';
import MenuList from '../components/MenuList';
import HeroBanner from '../components/HeroBanner';
import menuHeroBanner from '../assets/images/menu-hero-banner.jpg';

const Menu = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="Menu" imageFile={menuHeroBanner} />
      <section className="main-content menu">
        <h3>Drinks</h3>
        <p className="menu-info"><span className="bold">Milk Selections:</span> Oat... and only oat</p>
        <p className="menu-info"><span className="bold">House Made Syrups:</span> Vanilla, Pumpkin Spice</p>
        <p className="menu-info">✧: <span className="italics">house specialty</span></p>
        <h4>Coffee</h4>
        <MenuList type="Coffee" />
        <h4>Espresso</h4>
        <MenuList type="Espresso" />
        <h4>Tea</h4>
        <MenuList type="Tea" />
      </section>
    </React.Fragment>
  );
}

export default Menu;