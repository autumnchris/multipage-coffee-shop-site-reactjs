import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="main-content not-found">
      <h2>404: Page not found</h2>
      <div className="button-group">
        <Link to="/" className="button">Back to Home</Link>
      </div>
    </section>
  );
}

export default NotFound;