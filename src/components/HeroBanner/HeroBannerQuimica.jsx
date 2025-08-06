// Importa React, el hook useRef para acceder al DOM y useState para manejar estados
import React, { useRef, useState } from 'react';
// Importa los estilos del banner desde su archivo CSS
import './HeroBanner.css';
// Importa el video de fondo que se mostrará en el banner
import videoBg from '../../assets/La Quimica y la vida.mp4';
// Importa el hook de navegación para redireccionar a otra ruta
import { useNavigate } from 'react-router-dom';
// Importa el componente Modal personalizado
import Modal from '../../pages/Modal/Modal';
// Importa la imagen del título para mostrar encima del video
import tituloQuimica from '../../assets/hero_title_quimica.png';


// Componente funcional para el banner de la sección de Química
const HeroBannerQuimica = () => {
  // Referencia al elemento de video para poder controlar su sonido
  const videoRef = useRef(null);

  // Estado para controlar si el video está en silencio o no
  const [muted, setMuted] = useState(true);

  // Estado para controlar si el modal de "Más Info" está abierto
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hook para redireccionar a otra página dentro de la app
  const navigate = useNavigate();

  // Función para activar o desactivar el sonido del video
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted; // cambia el estado del sonido
      setMuted(!muted); // actualiza el estado en React
    }
  };

  // Función que redirige a la página del video al hacer clic en "Reproducir"
  const handlePlay = () => {
    navigate('/video-quimica');
  };
  // Función que abre el modal al hacer clic en "Más Info"
  const handleMoreInfo = () => {
    setIsModalOpen(true);
  };

  return (
    // Contenedor principal del Hero Banner
    <div className="hero-banner">
      
      {/* Video de fondo con reproducción automática, loop y control de sonido */}
      <video
        ref={videoRef}
        src={videoBg}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="video-bg"
      />

      {/* Capa superpuesta con el contenido textual e imagen */}
      <div className="overlay-content">
        {/* Imagen del título */}
        <img src={tituloQuimica} alt="Química en la vida diaria" className="titulo-img"/>
        
        {/* Descripción corta del contenido del banner */}
        <p>Descubre cómo las reacciones químicas están presentes en cada rincón 
          de tu entorno: desde la cocina de tu casa hasta los procesos naturales 
          que sostienen la vida.</p>

        {/* Botones de acción: reproducir y más información */}
        <div className="buttons">
          <button className="play" onClick={handlePlay}>▶ Reproducir</button>
          <button className="info" onClick={handleMoreInfo}>ℹ Más Info</button>
        </div>
      </div>

      {/* Botón para activar/desactivar el sonido del video */}
      <div className="sound-toggle">
        <button onClick={toggleSound}>
          {muted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* Renderiza el modal si el estado isModalOpen está en true */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

// Exporta el componente para su uso en otras partes de la aplicación
export default HeroBannerQuimica;
