import React, { useRef, useState } from 'react';
import './HeroBanner.css';
import videoBg from '../../assets/programacion.mp4'; 
import { useNavigate } from 'react-router-dom';
import Modal from '../../pages/Modal/Modal';

const HeroBannerComputacion = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const handlePlay = () => {
    navigate('/video-computacion'); // Asegúrate de tener esta ruta creada
  };

  const handleMoreInfo = () => {
    setIsModalOpen(true);
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

      <div className="overlay-content">
        <h1>El mundo de la programación</h1>
        <p>Conoce los fundamentos para convertirte en un gran programador.</p>
        <div className="buttons">
          <button className="play" onClick={handlePlay}>▶ Reproducir</button>
          <button className="info" onClick={handleMoreInfo}>ℹ Más Info</button>
        </div>
      </div>

      <div className="sound-toggle">
        <button onClick={toggleSound}>
          {muted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* Mostrar Modal */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default HeroBannerComputacion;
