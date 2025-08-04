import React, { useRef, useState } from 'react';
import './HeroBanner.css';
import videoBg from '../../assets/La Quimica y la vida.mp4';
import { useNavigate } from 'react-router-dom';
import Modal from '../../pages/Modal/Modal';
import tituloQuimica from '../../assets/hero_title_quimica.png';

const HeroBannerQuimica = () => {
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
    navigate('/video-quimica');
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
        <img src={tituloQuimica} alt="Química en la vida diaria" className="titulo-img"/>
        <p>Descubre cómo las reacciones químicas están presentes en cada rincón 
          de tu entorno: desde la cocina de tu casa hasta los procesos naturales 
          que sostienen la vida.</p>
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

export default HeroBannerQuimica;
