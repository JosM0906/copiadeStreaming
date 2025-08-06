// Importa React, el hook useRef para acceder al DOM y useState para manejar estados locales
import React, { useRef, useState } from 'react';
// Importa los estilos del componente HeroBanner
import './HeroBanner.css';
// Importa el video de fondo que se mostrará en el banner de Matemáticas
import videoBg from '../../assets/MatematicasEnElMundo.mp4';
// Importa el hook de navegación para redireccionar al usuario
import { useNavigate } from 'react-router-dom';
// Importa el componente Modal específico para Matemáticas
import Modal from '../../pages/Modal/ModalM';
// Importa la imagen del título para el banner de Matemáticas
import tituloMate from '../../assets/hero_title-mate.png';


// Componente funcional para el HeroBanner de la sección de Matemáticas
const HeroBannerMate = () => {
  // Referencia al video para poder manipular su volumen desde el código
  const videoRef = useRef(null);
  // Estado que indica si el video está silenciado
  const [muted, setMuted] = useState(true);
  // Estado que controla si el modal de "Más Info" está abierto
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Hook de navegación para redirigir a otra ruta
  const navigate = useNavigate();
  // Función que alterna el sonido del video (silenciado/activo)
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted; // Cambia el estado en el DOM
      setMuted(!muted); // Actualiza el estado de React
    }
  };

  
  // Función que navega a la ruta del video principal de Matemáticas
  const handlePlay = () => {
    navigate('/video-matematicas');
  };

  // Función que abre el modal informativo
  const handleMoreInfo = () => {
    setIsModalOpen(true);
  };

  return (
    // Contenedor principal del Hero Banner
    <div className="hero-banner">
      
      {/* Video de fondo con reproducción automática, en bucle y silenciado según el estado */}
      <video
        ref={videoRef}
        src={videoBg}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="video-bg"
      />

      {/* Contenido superpuesto encima del video */}
      <div className="overlay-content">
        {/* Imagen del título de la sección */}
        <img src={tituloMate} alt="Matematicas en la vida real" className="titulo-img"/>

        {/* Texto descriptivo del contenido del banner */}
        <p>
          Descubre cómo los números y las fórmulas revelan los secretos del universo, 
          explicando desde los patrones de la naturaleza hasta las tecnologías que usamos cada día.
        </p>

        {/* Botones para reproducir el video y abrir el modal */}
        <div className="buttons">
          <button className="play" onClick={handlePlay}>▶ Reproducir</button>
          <button className="info" onClick={handleMoreInfo}>ℹ Más Info</button>
        </div>
      </div>

      {/* Botón para activar o silenciar el sonido del video */}
      <div className="sound-toggle">
        <button onClick={toggleSound}>
          {muted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* Renderiza el modal si el estado isModalOpen está activo */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otras partes del proyecto
export default HeroBannerMate;
