import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer>
      <div className="coffee-shop-footer">
        <Logo />
        <div className="other">
          <div className="social-media-links">
            <a href="https://www.instagram.com/coffeeartbytyler" target="_blank" aria-label="Instagram" title="Instagram">
              <span className="fab fa-instagram fa-fw"></span>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="app-footer">Forked from <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard's</a> amazing <a href="https://github.com/autumnchris/multipage-coffee-shop-site-reactjs" target="_blank">coffee shop example</a>!</div>
    </footer>
  );
}

export default Footer;