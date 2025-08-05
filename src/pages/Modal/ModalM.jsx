import './Modal.css';
import { useNavigate } from 'react-router-dom';
import poster from '../../assets/bannerMatematicas.jpg';

const ModalC = ({ onClose }) => {
  const navigate = useNavigate();

  const video = {
    titulo: 'Matemáticas en la vida diaria',
    youtubeId: '4iFALQ1ACdA',
    progreso: 0,
    descripcion: 'Las matemáticas están presentes en cada aspecto de nuestra vida...',
  };

  const handlePlay = () => {
    navigate('/video-quimica'); // Puedes ajustar esto si el video es otro
  };

  const agregarAFavoritos = (video) => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    const yaExiste = favoritos.some(fav => fav.youtubeId === video.youtubeId);
    if (!yaExiste) {
      favoritos.push(video);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
      alert('¡Agregado a favoritos!');
    } else {
      alert('Este video ya está en favoritos.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>X</button>

        <div className="modal-content">
          <img className="modal-poster" src={poster} alt="Matemáticas" />

          <div className="modal-details">
            <h2 className="modal-title">{video.titulo}</h2>

            <div className="modal-buttons">
              <button className="btn play" onClick={handlePlay}>
                ▶ Reproducir
              </button>

              <button className="btn circle" onClick={() => agregarAFavoritos(video)}>
                ＋
              </button>

              <button className="btn circle" onClick={handlePlay}>
                ⬇
              </button>
            </div>

            <div className="modal-tags">
              <span>2025</span> <span>•</span> <span>1 episodio</span> <span>•</span> <span>HD</span>
            </div>

            <p className="modal-description">{video.descripcion}</p>

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
