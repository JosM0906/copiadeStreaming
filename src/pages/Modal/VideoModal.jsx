import React from 'react';
import './VideoModal.css';

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✖</button>

        <div className="modal-content">
          <div className="modal-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1`}
              title={video.titulo}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>

          <div className="modal-details">
            <h2 className="modal-title">{video.titulo}</h2>

            <div className="button-row">
              <button className="btn play" onClick={() => onVideoClick && onVideoClick(item)}>Reproducir</button>
              <button className="btn circle">✓</button>
              <button className="btn circle">👍</button>
            </div>


            <div className="modal-tags">
              <span>{video.anio || '2025'}</span>
              <span>•</span>
              <span>{video.duracion || '2 min'}</span>
              <span>•</span>
              <span>{video.clasificacion || '13+'}</span>
            </div>

            <p className="modal-description">
              {video.descripcion || 'Este experimento demuestra un fenómeno químico impactante.'}
            </p>

            <div className="modal-extra">
              <p><strong>Género:</strong> {video.genero || 'Ciencia, Química, Experimentos'}</p>
              <p><strong>Esta serie es:</strong> {video.serieEs || 'Educativa, Interactiva'}</p>
              {video.elenco && <p><strong>Elenco:</strong> {video.elenco}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
