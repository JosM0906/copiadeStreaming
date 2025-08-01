import React, { useState } from 'react';
import './carruselCategoriaQ.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const CarruselCategoriaQ = ({ titulo, items, onVideoClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="categoria-carrusel">
      <h2>{titulo}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        loop={false}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`card-video ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=${hoveredIndex === index ? 1 : 0}&mute=1&controls=0&loop=1&playlist=${item.youtubeId}`}
                  title={item.titulo}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="video-overlay">
                <div className="button-row">
                  <button
                    className="btn play"
                    onClick={() => onVideoClick && onVideoClick(item)}
                  >
                    ▶
                  </button>
                  <button className="btn">✓</button>
                  <button className="btn">👍</button>
                  <button
                    className="btn arrow"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    ⌄
                  </button>
                </div>

                <div className="video-info">
                  <span className="episode">M1:E1 «{item.titulo}»</span>
                  <span className="duration">34 de 78 min</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${item.progreso || 0}%` }}
                  ></div>
                </div>

                {expandedIndex === index && (
                  <div className="expand-info">
                    <p>
                      <strong>Descripción:</strong> Este experimento te enseña
                      cómo reacciones químicas simples pueden generar efectos
                      sorprendentes como burbujas inflamables.
                    </p>
                    <p>
                      <strong>Duración:</strong> 2 minutos
                    </p>
                    <p>
                      <strong>Clasificación:</strong> Apto para todo público
                    </p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarruselCategoriaQ;
