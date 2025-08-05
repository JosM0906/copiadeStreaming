import './Modal.css';
import { useNavigate } from 'react-router-dom';
import poster from '../../assets/bannerComputacion.jpg';

const ModalC = ({ onClose }) => {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/video-quimica');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>X</button>

        <div className="modal-content">
          <img className="modal-poster" src={poster} alt="Química" />

          <div className="modal-details">
            <h2 className="modal-title">Computacion en la vida diaria</h2>

            <div className="modal-buttons">
              <button className="btn play" onClick={handlePlay}>
                <span className="play-icon">▶</span>
                <span className="play-text">Reproducir</span>
              </button>

              <button className="btn circle">＋</button>
              <button className="btn circle"onClick={handlePlay}>⬇</button>
            </div>

            <div className="modal-tags">
              <span>2025</span>
              <span>•</span>
              <span>1 episodio</span>
              <span>•</span>
              <span>HD</span>
            </div>

            <p className="modal-description">
              La programación está presente en cada aspecto de nuestra vida digital: desde las aplicaciones que usamos a diario hasta los sistemas que controlan nuestros dispositivos.
            Este contenido te mostrará cómo los principios de la programación están detrás de muchas de las herramientas que usamos todos los días.
            </p>

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

export default ModalC;
