import React, { useRef, useState } from 'react';
import './HeroBanner.css';
import videoBg from '../../assets/Historia en la vida cotidiana.mp4'; 
import { useNavigate } from 'react-router-dom';
import Modal from '../../pages/Modal/Modal';

const HeroBannerHistoria = () => {
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
    navigate('/video-historia');
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
        <h1>Historia a través del tiempo</h1>
        <p>Explora los hechos que marcaron el rumbo de la humanidad.</p>
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

export default HeroBannerHistoria;
