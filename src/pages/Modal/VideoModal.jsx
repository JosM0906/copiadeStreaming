import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoModal.css';

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="modal-video">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1`}
            title={video.titulo}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        <div className="modal-info">
          <h2>{video.titulo}</h2>

          {/* Meta info personalizada */}
          <div className="meta">
            <span><strong>{video.anio || '2025'}</strong></span>
            <span>• {video.clasificacion || '13+'}</span>
            <span>• {video.duracion || '2 min'}</span>
            <span>• {video.tipo || 'Experimento'}</span>
          </div>

          <p>{video.descripcion || 'Este experimento demuestra un fenómeno químico impactante.'}</p>

          {/* Botones de acción */}
          <div className="actions">
            <button className="btn play">▶ Reanudar</button>
            <button className="btn">✓</button>
            <button className="btn">👍</button>
          </div>

          {/* Información adicional */}
          <div className="extra-info">
            <p><strong>Géneros:</strong> {video.genero || 'Ciencia, Química, Experimentos'}</p>
            <p><strong>Esta serie es:</strong> {video.serieEs || 'Educativa, Interactiva'}</p>
            {video.elenco && <p><strong>Elenco:</strong> {video.elenco}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
