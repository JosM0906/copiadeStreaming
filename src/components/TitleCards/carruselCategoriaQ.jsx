import React, { useState } from 'react';
import './carruselCategoriaQ.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const CarruselCategoriaQ = ({ titulo, items, onVideoClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="categoria-carrusel">
      <h2>{titulo}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={6}
        navigation
        loop={false}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 }
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-wrapper">
              <div
                className="card-netflix-container"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  className="thumbnail"
                  src={item.imagen || `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                  alt={item.titulo}
                />
                <div className="titulo-overlay">
                  <span>{item.titulo}</span>
                </div>

                {hoveredIndex === index && (
                  <div className="hover-card">
                    <img
                      className="hover-image"
                      src={item.imagen || `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.titulo}
                    />
                    <div className="hover-buttons">
                      <div className="left-buttons">
                        <button className="btn play-button" onClick={() => onVideoClick && onVideoClick(item)}>▶</button>
                        <button className="btn icon-button">✔</button>
                        <button className="btn icon-button">👍</button>
                      </div>
                      <button className="btn icon-button">⌄</button> {/* flechita */}
                    </div>

                    <div className="hover-info">
                      <span className="badge">13+</span>
                      <span className="badge">Miniserie</span>
                      <span className="badge">HD</span>
                    </div>
                    <div className="hover-tags">
                      Inspirador • Conmovedor • Tragicomedia
                    </div>
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
