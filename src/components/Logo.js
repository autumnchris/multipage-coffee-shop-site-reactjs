import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <span className="logo--top">Cafe by Tyler</span>
        <span className="logo--bottom"></span>
      </Link>
    </div>
  );
}

export default Logo;