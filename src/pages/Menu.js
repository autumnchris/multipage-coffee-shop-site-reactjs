import React from 'react';
import MenuList from '../components/MenuList';
import HeroBanner from '../components/HeroBanner';
import menuHeroBanner from '../assets/images/menu-hero-banner.jpg';

const Menu = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="Our Menu" imageFile={menuHeroBanner} />
      <section className="main-content menu">
        <h3>Drinks</h3>
        <p className="menu-info"><span className="bold">Milk Selections:</span> Low Fat, Skim, Half & Half, Almond, Oat</p>
        <p className="menu-info"><span className="bold">House Made Syrups $0.50:</span> Mocha, White Mocha, Caramel, Vanilla, Cinnamon, Raspberry, Hazelnut, Lavender</p>
        <h4>Coffee</h4>
        <MenuList type="Coffee" />
        <p className="menu-info">Free refills available for any of our drip coffees and Nitro Cold Brew.</p>
        <h4>Espresso</h4>
        <MenuList type="Espresso" />
        <h4>Tea</h4>
        <MenuList type="Tea" />
        <h4>Beer & Wine</h4>
        <MenuList type="Beer & Wine" />
        <hr />
        <h3>Food</h3>
        <h4>Bakery</h4>
        <MenuList type="Bakery" />
        <h4>Bites</h4>
        <MenuList type="Bites" />
      </section>
    </React.Fragment>
  );
}

export default Menu;