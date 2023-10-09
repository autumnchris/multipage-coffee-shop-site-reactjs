import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <h1>
        <Logo />
      <div className="social-media-links">
        <a href="https://www.instagram.com/coffeeartbytyler" target="_blank" aria-label="Instagram" title="Instagram">
          <span className="fab fa-instagram fa-fw"></span>
        </a>
      </div>
      </h1>
    </header>
  );
}

export default Header;