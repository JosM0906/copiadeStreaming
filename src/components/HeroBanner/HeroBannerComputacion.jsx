import React, { useRef, useState } from 'react';
import './HeroBanner.css';
import videoBg from '../../assets/programacion.mp4'; 
import { useNavigate } from 'react-router-dom';
import Modal from '../../pages/Modal/ModalC';
import tituloCompu from '../../assets/hero_title-compu.png';

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
    navigate('/video-computacion'); 
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
        <img src={tituloCompu} alt="Fundamentos de la programación" className="titulo-img"/>
        <p>Conoce los fundamentos esenciales que te permitirán desarrollar tu lógica, crear tus primeros programas y avanzar en el camino para convertirte en un gran programador.</p>
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
