import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <h1>
        <Logo />
      </h1>
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/visit">Visit</NavLink>
      </nav>
    </header>
  );
}

export default Header;