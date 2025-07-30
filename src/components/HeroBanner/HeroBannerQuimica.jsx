import React from 'react';
import './HeroBanner.css';

const HeroBanner = ({ background, title, description }) => {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-overlay">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-buttons">
          <button className="play">▶ Reproducir</button>
          <button className="info">ℹ Más información</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
