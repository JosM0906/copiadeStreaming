import React, { useRef, useState } from 'react';
import './HeroBanner.css';
import videoBg from '../../assets/MatematicasEnElMundo.mp4';
import { useNavigate } from 'react-router-dom';
import Modal from '../../pages/Modal/ModalM';

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
        <h1>Matemáticas en el mundo real</h1>
        <p>Descubre cómo los números y las fórmulas explican todo lo que nos rodea.</p>
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
