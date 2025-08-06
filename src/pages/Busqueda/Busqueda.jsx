import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
import VideoModal from '../Modal/VideoModal';
import { todosLosVideos } from './todosLosVideos';

// Función para eliminar tildes y hacer lowercase
const normalizar = (texto) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const Busqueda = () => {
  const [searchParams] = useSearchParams();
  const [resultados, setResultados] = useState([]);
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const query = searchParams.get('query') || '';

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
    <div className="categoria-page" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
      {/* Título */}
      <div style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
        <h1 style={{ color: 'white' }}>Videos encontrados</h1>
        <h3 style={{ color: '#ccc', fontWeight: 'normal' }}>
          Resultados para: <em>"{query}"</em>
        </h3>
      </div>

      {/* Resultados */}
      {resultados.length > 0 ? (
        <CarruselCategoriaQ
          titulo=""
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

      {/* Modal de video */}
      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

export default Busqueda;
