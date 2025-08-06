// Importa los estilos específicos del modal desde el archivo CSS
import './Modal.css';
// Importa el hook para redireccionar entre rutas
import { useNavigate } from 'react-router-dom';
// Importa la imagen del banner que se usará como póster en el modal
import poster from '../../assets/bannerBiologia.jpg';
// Componente funcional ModalC (para la sección de Biología)
// Recibe una prop llamada onClose que cierra el modal
const ModalC = ({ onClose }) => {
  // Hook para navegar a otra ruta (usado para el botón de reproducir)
  const navigate = useNavigate();
  // Función que redirige a la página del video (de momento, apunta a "video-quimica")
  const handlePlay = () => {
    navigate('/video-quimica'); // ⚠️ Podrías cambiar esta ruta a '/video-biologia' si corresponde
  };

  return (
    // Fondo oscuro que cubre toda la pantalla al mostrarse el modal
    <div className="modal-overlay">
      <div className="modal-box">
        {/* Botón para cerrar el modal */}
        <button className="modal-close" onClick={onClose}>X</button>

        {/* Contenido visual del modal */}
        <div className="modal-content">
          
          {/* Imagen tipo póster que acompaña la descripción */}
          <img className="modal-poster" src={poster} alt="Química" />

          {/* Sección de detalles del video */}
          <div className="modal-details">
            <h2 className="modal-title">Biología en la vida diaria</h2>

            {/* Botones de acción dentro del modal */}
            <div className="modal-buttons">
              {/* Botón de reproducción */}
              <button className="btn play" onClick={handlePlay}>
                <span className="play-icon">▶</span>
                <span className="play-text">Reproducir</span>
              </button>

              {/* Botón para agregar a lista o favoritos */}
              <button className="btn circle">＋</button>

              {/* Botón de descarga (simulado) */}
              <button className="btn circle" onClick={handlePlay}>⬇</button>
            </div>

            {/* Etiquetas informativas del video */}
            <div className="modal-tags">
              <span>2025</span>
              <span>•</span>
              <span>1 episodio</span>
              <span>•</span>
              <span>HD</span>
            </div>

            {/* Descripción del contenido del video */}
            <p className="modal-description">
              La biología está presente en cada aspecto de nuestra vida: desde cómo funciona nuestro cuerpo 
              hasta los ecosistemas que nos rodean.
              Este contenido te mostrará cómo los procesos biológicos ocurren constantemente a nuestro alrededor, 
              incluso sin que lo notemos.
            </p>

            {/* Información adicional como clasificación y género */}
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

// Exporta el componente para poder usarlo en otras partes del proyecto
export default ModalC;
