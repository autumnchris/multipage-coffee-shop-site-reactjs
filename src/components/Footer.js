import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer>
      <div className="coffee-shop-footer">
        <Logo />
        <div className="site-links">
          <nav className="links-container">
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/visit">Visit</Link>
          </nav>
        </div>
        <div className="other">
          <div className="contact-info">
            <div className="info hours"><span className="icon fa-regular fa-clock fa-fw" aria-hidden="true"></span> Hours: DAILY 7AM - 8PM</div>
            <div className="info address">
              <span className="icon fa-solid fa-location-dot fa-fw" aria-hidden="true"></span> <address>555 Espresso Lane Mochaville FL 55555</address>
            </div>
            <div className="info phone"><span className="icon fa-solid fa-phone fa-fw" aria-hidden="true"></span> <address>
                <a href="tel:5555555555">(555) 555-5555</a>
            </address></div>
          </div>
          <div className="social-media-links">
            <a href="" target="_blank" aria-label="Our Facebook page" title="Facebook">
              <span className="fa-brands fa-facebook fa-fw"></span>
            </a>
            <a href="" target="_blank" aria-label="Our Instagram account" title="Instagram">
              <span className="fa-brands fa-instagram fa-fw"></span>
            </a>
            <a href="" target="_blank" aria-label="Our Bluesky account" title="Bluesky">
              <span className="fa-brands fa-bluesky fa-fw"></span>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="app-footer">Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;