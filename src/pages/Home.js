import React from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';

const Home = () => {
  return (
    <section className="main-content home">
      <section className="content-container welcome">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Venenatis tellus in metus vulputate eu.</p>
      </section>
      <section className="content-container image-gallery">
        <ImageGallery />
      </section>
      <section className="content-container info">
        <div className="info-container menu-info">
          <h2>Coffee, Espresso, Tea, and more...</h2>
          <Link to="/menu" className="button">View Our Menu</Link>
        </div>
        <div className="info-container wifi-info">
          <h2>Free Wifi available to all customers!</h2>
          <p>Password is <span className="wifi-password">weheartcoffee</span></p>
        </div>
      </section>
    </section>
  );
}

export default Home;