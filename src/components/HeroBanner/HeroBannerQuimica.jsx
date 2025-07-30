import React from 'react';
import './HeroBanner.css';

const HeroBannerQuimica = () => {
  return (
    <div className="hero-banner">
      <div className="overlay">
        <h1>Química en la vida diaria</h1>
        <p>Descubre cómo reacciones químicas ocurren en tu entorno.</p>
        <div className="buttons">
          <button className="play">▶ Reproducir</button>
          <button className="info">ℹ Más información</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerQuimica;
