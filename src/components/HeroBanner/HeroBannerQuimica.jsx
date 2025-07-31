import React, { useRef, useState } from 'react';
import './HeroBanner.css';
import videoBg from '../../assets/La Quimica y la vida.mp4';

const HeroBannerQuimica = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <div className="hero-banner">
      <video
        ref={videoRef}
        src={videoBg}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="video-bg"
      />

      {/* Contenido principal izquierdo */}
      <div className="overlay-content">
        <h1>Química en la vida diaria</h1>
        <p>Descubre cómo reacciones químicas ocurren en tu entorno.</p>
        <div className="buttons">
          <button className="play">▶ Reproducir</button>
          <button className="info">ℹ Más información</button>
        </div>
      </div>

      {/* Botón de sonido en esquina inferior derecha */}
      <div className="sound-toggle">
        <button onClick={toggleSound}>
          {muted ? '🔇' : '🔊'}
        </button>
      </div>
    </div>
  );
};

export default HeroBannerQuimica;
