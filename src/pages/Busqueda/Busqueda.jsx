// Importa React y los hooks useState y useEffect
import React, { useState, useEffect } from 'react';
// Hook para leer parámetros de búsqueda de la URL
import { useSearchParams } from 'react-router-dom';
// Componente de carrusel reutilizable para mostrar los videos encontrados
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
// Modal para reproducir el video seleccionado
import VideoModal from '../Modal/VideoModal';
// Lista completa de todos los videos disponibles para búsqueda
import { todosLosVideos } from './todosLosVideos';

// Función utilitaria que elimina tildes y convierte texto a minúsculas para comparar
const normalizar = (texto) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
// Componente funcional Busqueda
const Busqueda = () => {
  // Obtiene los parámetros de búsqueda desde la URL (?query=...)
  const [searchParams] = useSearchParams();
  // Estado para almacenar los resultados filtrados
  const [resultados, setResultados] = useState([]);
  // Estado para controlar el video seleccionado para el modal
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);
  // Obtiene el valor del parámetro "query"
  const query = searchParams.get('query') || '';
  // Función para abrir el modal con el video seleccionado
  const handleAbrirModal = (video) => setVideoSeleccionado(video);
  // Función para cerrar el modal
  const handleCerrarModal = () => setVideoSeleccionado(null);

  // useEffect que ejecuta la búsqueda cada vez que cambia el valor de query
  useEffect(() => {
    if (query.trim()) {
      // Normaliza el texto del query para hacer la búsqueda sin tildes y sin importar mayúsculas
      const normalizadoQuery = normalizar(query);

      // Filtra los videos cuyo título, descripción o categoría coincidan con el query
      const filtrados = todosLosVideos.filter((video) =>
        normalizar(video.titulo).includes(normalizadoQuery) ||
        normalizar(video.descripcion).includes(normalizadoQuery) ||
        normalizar(video.categoria).includes(normalizadoQuery)
      );

      // Guarda los resultados en el estado
      setResultados(filtrados);
    } else {
      // Si el query está vacío, limpia los resultados
      setResultados([]);
    }
  }, [query]);

  return (
    <div className="categoria-page" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
      {/* Encabezado de la búsqueda */}
      <div style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
        <h1 style={{ color: 'white' }}>Videos encontrados</h1>
        <h3 style={{ color: '#ccc', fontWeight: 'normal' }}>
          Resultados para: <em>"{query}"</em>
        </h3>
      </div>

      {/* Renderiza los resultados si hay coincidencias */}
      {resultados.length > 0 ? (
        <CarruselCategoriaQ
          titulo=""
          items={resultados}
          onVideoClick={handleAbrirModal}
        />
      ) : (
        // Si no hay resultados, muestra mensaje (pero solo si hay query)
        query && (
          <p style={{ color: 'white', marginLeft: '2rem' }}>
            No se encontraron resultados.
          </p>
        )
      )}

      {/* Modal que muestra el video seleccionado */}
      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

// Exporta el componente para poder utilizarlo en el sistema de rutas
export default Busqueda;
