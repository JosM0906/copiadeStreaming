import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
import VideoModal from '../Modal/VideoModal';
import { todosLosVideos } from './todosLosVideos';

// 👉 Función para eliminar tildes y hacer minúscula
const normalizar = (texto) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const Busqueda = () => {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const handleChange = (e) => setQuery(e.target.value);
  const handleAbrirModal = (video) => setVideoSeleccionado(video);
  const handleCerrarModal = () => setVideoSeleccionado(null);

  useEffect(() => {
    if (query.trim()) {
      const normalizadoQuery = normalizar(query);
      const filtrados = todosLosVideos.filter((video) =>
        normalizar(video.titulo).includes(normalizadoQuery) ||
        normalizar(video.descripcion).includes(normalizadoQuery) ||
        normalizar(video.categoria).includes(normalizadoQuery)
      );
      setResultados(filtrados);
    } else {
      setResultados([]);
    }
  }, [query]);

  return (
    <div className="categoria-page" style={{ paddingTop: '100px' }}>
      <Navbar />
      <h1 style={{ color: 'white', marginLeft: '2rem' }}>Buscar contenido educativo</h1>

      <div style={{ margin: '2rem' }}>
        <input
          type="text"
          placeholder="Escribe una palabra clave..."
          value={query}
          onChange={handleChange}
          style={{
            padding: '10px',
            width: '100%',
            maxWidth: '600px',
            fontSize: '1.1rem',
            borderRadius: '8px',
            border: 'none'
          }}
        />
      </div>

      {resultados.length > 0 ? (
        <CarruselCategoriaQ
          titulo={`Resultados para: "${query}"`}
          items={resultados}
          onVideoClick={handleAbrirModal}
        />
      ) : (
        query && (
          <p style={{ color: 'white', marginLeft: '2rem' }}>
            No se encontraron resultados.
          </p>
        )
      )}

      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

export default Busqueda;
