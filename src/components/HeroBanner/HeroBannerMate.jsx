import React, { useRef, useState } from 'react';
import './HeroBanner.css';
import videoBg from '../../assets/MatematicasEnElMundo.mp4';
import { useNavigate } from 'react-router-dom';
import Modal from '../../pages/Modal/ModalM';
import tituloMate from '../../assets/hero_title-mate.png';

const HeroBannerMate = () => {
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
    navigate('/video-matematicas');
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
        <img src={tituloMate} alt="Matematicas en la vida real" className="titulo-img"/>
        <p>Descubre cómo los números y las fórmulas revelan los secretos del universo, explicando desde los patrones de la naturaleza hasta las tecnologías que usamos cada día.</p>
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

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default HeroBannerMate;
