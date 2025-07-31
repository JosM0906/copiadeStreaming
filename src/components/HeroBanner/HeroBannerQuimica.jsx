import React, { useRef, useState } from 'react';
import './HeroBanner.css';
import videoBg from '../../assets/La Quimica y la vida.mp4';
import { useNavigate } from 'react-router-dom';

const HeroBannerQuimica = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const handlePlay = () => {
    navigate('/video-quimica'); // ruta interna, no al archivo mp4
  };

  const handleMoreInfo = () => {
    setShowModal(true);
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
          <button className="play" onClick={handlePlay}>▶ Reproducir</button>
          <button className="info" onClick={handleMoreInfo}>ℹ Más información</button>
        </div>
      </div>

      {/* Botón de sonido */}
      <div className="sound-toggle">
        <button onClick={toggleSound}>
          {muted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* Modal emergente */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close" onClick={() => setShowModal(false)}>✖</button>
            <h2>¿Qué es la química en la vida diaria?</h2>
            <p>
              La química está presente en cada aspecto de nuestra vida:
              desde la digestión hasta la limpieza. Este contenido te
              mostrará cómo reacciones comunes nos rodean a diario.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBannerQuimica;
