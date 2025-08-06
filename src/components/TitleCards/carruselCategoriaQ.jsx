// Importa React y el hook useState para manejar estados locales
import React, { useState } from 'react';

// Importa los estilos del carrusel
import './carruselCategoriaQ.css';

// Importa los componentes necesarios de Swiper para el carrusel
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Estilos base de Swiper
import 'swiper/css/navigation'; // Estilos del módulo de navegación
import { Navigation } from 'swiper/modules'; // Módulo para las flechas de navegación

// Componente que representa un carrusel con tarjetas estilo Netflix
// Props:
// - titulo: título de la categoría (ej. "Documentales")
// - items: lista de objetos con datos de los videos
// - onVideoClick: función que se ejecuta al hacer clic en el botón de "play"
const CarruselCategoriaQ = ({ titulo, items, onVideoClick }) => {
  // Estado para controlar qué tarjeta está siendo "hovered" (apuntada con el mouse)
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    // Contenedor general del carrusel
    <div className="categoria-carrusel">
      {/* Título de la categoría */}
      <h2>{titulo}</h2>

      {/* Componente Swiper para el carrusel */}
      <Swiper
        modules={[Navigation]} // Agrega módulo de navegación (flechas)
        spaceBetween={15} // Espacio entre tarjetas
        slidesPerView={6} // Cantidad de tarjetas visibles en pantallas grandes
        navigation // Activa las flechas de navegación
        loop={false} // No se repite en bucle
        breakpoints={{
          320: { slidesPerView: 2 },    // En pantallas pequeñas, 2 slides
          640: { slidesPerView: 3 },    // En pantallas medianas, 3 slides
          1024: { slidesPerView: 6 }    // En pantallas grandes, 6 slides
        }}
      >
        {/* Recorre cada video/item y lo muestra en una tarjeta */}
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-wrapper">
              <div
                className="card-netflix-container"
                onMouseEnter={() => setHoveredIndex(index)} // Apunta esta tarjeta
                onMouseLeave={() => setHoveredIndex(null)}  // Quita el hover
              >
                {/* Imagen miniatura del video */}
                <img
                  className="thumbnail"
                  src={item.imagen || `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                  alt={item.titulo}
                />

                {/* Overlay que muestra el título encima de la imagen */}
                <div className="titulo-overlay">
                  <span>{item.titulo}</span>
                </div>

                {/* Contenido visible solo cuando el mouse está sobre la tarjeta */}
                {hoveredIndex === index && (
                  <div className="hover-card">
                    {/* Imagen más grande en hover */}
                    <img
                      className="hover-image"
                      src={item.imagen || `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.titulo}
                    />

                    {/* Botones al pasar el mouse */}
                    <div className="hover-buttons">
                      <div className="left-buttons">
                        {/* Botón de reproducir */}
                        <button className="btn play-button" onClick={() => onVideoClick && onVideoClick(item)}>▶</button>

                        {/* Otros botones visuales (guardar, like) */}
                        <button className="btn icon-button">✔</button>
                        <button className="btn icon-button">👍</button>
                      </div>

                      {/* Botón adicional de "más opciones" (flechita) */}
                      <button className="btn icon-button">⌄</button>
                    </div>

                    {/* Etiquetas informativas (edad, tipo, calidad) */}
                    <div className="hover-info">
                      <span className="badge">13+</span>
                      <span className="badge">Miniserie</span>
                      <span className="badge">HD</span>
                    </div>

                    {/* Tags descriptivos del contenido */}
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

// Exporta el componente para ser utilizado en otras páginas
export default CarruselCategoriaQ;
