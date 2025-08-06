// Importa los estilos del modal desde su archivo CSS
import './Modal.css';

// Importa el hook de navegación para redireccionar a otra ruta
import { useNavigate } from 'react-router-dom';

// Importa la imagen que se usará como póster dentro del modal
import poster from '../../assets/bannerQuimica.jpg';

// Componente funcional Modal
// Recibe una prop: onClose, que se ejecuta al cerrar el modal
const Modal = ({ onClose }) => {
  // Hook para redireccionar a la página de video
  const navigate = useNavigate();

  // Función que redirige al video de química
  const handlePlay = () => {
    navigate('/video-quimica');
  };

  return (
    // Fondo oscuro que cubre toda la pantalla
    <div className="modal-overlay">
      
      {/* Caja del contenido del modal */}
      <div className="modal-box">

        {/* Botón para cerrar el modal */}
        <button className="modal-close" onClick={onClose}>X</button>

        {/* Contenido del modal: imagen + texto + botones */}
        <div className="modal-content">

          {/* Imagen del banner o portada */}
          <img className="modal-poster" src={poster} alt="Química" />

          {/* Contenedor del texto y botones a la derecha del póster */}
          <div className="modal-details">
            {/* Título del contenido */}
            <h2 className="modal-title">Química en la vida diaria</h2>

            {/* Botones de acción: reproducir, agregar, descargar */}
            <div className="modal-buttons">
              {/* Botón para reproducir */}
              <button className="btn play" onClick={handlePlay}>
                <span className="play-icon">▶</span>
                <span className="play-text">Reproducir</span>
              </button>

              {/* Botón para agregar a favoritos o lista */}
              <button className="btn circle">＋</button>

              {/* Botón para "descargar" (puede ser usado para simular) */}
              <button className="btn circle" onClick={handlePlay}>⬇</button>
            </div>

            {/* Etiquetas informativas como año, episodios, calidad */}
            <div className="modal-tags">
              <span>2025</span>
              <span>•</span>
              <span>1 episodio</span>
              <span>•</span>
              <span>HD</span>
            </div>

            {/* Descripción del contenido */}
            <p className="modal-description">
              La química está presente en cada aspecto de nuestra vida: desde la digestión hasta la limpieza.
              Este contenido te mostrará cómo reacciones comunes nos rodean a diario.
            </p>

            {/* Información adicional: clasificación y género */}
            <div className="modal-extra">
              <p><strong>Clasificación:</strong> Apto para todo público</p>
              <p><strong>Género:</strong> Educativo, Ciencias</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporta el componente para que pueda usarse en otras partes del proyecto
export default Modal;
