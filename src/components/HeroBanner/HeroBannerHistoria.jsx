// Importa React y los hooks useRef y useState para manejar referencias y estados
import React, { useRef, useState } from 'react';
// Importa los estilos CSS específicos del HeroBanner
import './HeroBanner.css';
// Importa el video de fondo que se mostrará en el banner de Historia
import videoBg from '../../assets/Historia en la vida cotidiana.mp4'; 
// Importa el hook para navegación entre rutas
import { useNavigate } from 'react-router-dom';
// Importa el componente Modal específico para la sección de Historia
import Modal from '../../pages/Modal/ModalH';
// Importa la imagen del título para el banner de Historia
import tituloHistoria from '../../assets/hero_title-historia.png';

// Componente funcional que representa el HeroBanner de la sección de Historia
const HeroBannerHistoria = () => {
  // Referencia al elemento de video para manipular directamente el DOM (activar/desactivar sonido)
  const videoRef = useRef(null);
  // Estado que controla si el video está silenciado
  const [muted, setMuted] = useState(true);
  // Estado que controla si el modal está abierto
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Hook para redirigir a otra ruta
  const navigate = useNavigate();
  // Función que activa o desactiva el sonido del video
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted; // Cambia el valor en el DOM
      setMuted(!muted); // Actualiza el estado en React
    }
  };

  // Función que redirige a la página del video de historia al hacer clic en "Reproducir"
  const handlePlay = () => {
    navigate('/video-historia');
  };

  // Función que abre el modal al hacer clic en "Más Info"
  const handleMoreInfo = () => {
    setIsModalOpen(true);
  };

  return (
    // Contenedor principal del HeroBanner
    <div className="hero-banner">

      {/* Reproductor de video como fondo del banner */}
      <video
        ref={videoRef}
        src={videoBg}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="video-bg"
      />

      {/* Capa de contenido superpuesta encima del video */}
      <div className="overlay-content">
        {/* Imagen del título de la sección de Historia */}
        <img src={tituloHistoria} alt="Historia a través del tiempo" className="titulo-img"/>

        {/* Descripción que acompaña al título */}
        <p>
          Explora los hechos que marcaron el rumbo de la humanidad y comprende 
          cómo cada acontecimiento ha moldeado el mundo en el que vivimos hoy.
        </p>

        {/* Botones de acción: reproducir video y ver más información */}
        <div className="buttons">
          <button className="play" onClick={handlePlay}>▶ Reproducir</button>
          <button className="info" onClick={handleMoreInfo}>ℹ Más Info</button>
        </div>
      </div>

      {/* Botón para activar o desactivar el sonido del video */}
      <div className="sound-toggle">
        <button onClick={toggleSound}>
          {muted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* Renderiza el modal si isModalOpen está en true */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

// Exporta el componente para que pueda usarse en otras partes del proyecto
export default HeroBannerHistoria;
