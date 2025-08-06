// Importa React y los hooks useEffect y useState
import React, { useEffect, useState } from 'react';
// Importa el componente Carrusel reutilizable
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
// Importa el Navbar (aunque no se está usando visualmente aquí, puede agregarse si se desea)
import Navbar from '../../components/Navbar/Navbar';

// Componente funcional que muestra la sección de "Favoritos"
const Favoritos = () => {
  // Estado para almacenar los videos guardados en favoritos
  const [favoritos, setFavoritos] = useState([]);

  // Hook useEffect que se ejecuta una sola vez al montar el componente
  useEffect(() => {
    // Obtiene los favoritos guardados del localStorage, si no hay, retorna un array vacío
    const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];
    // Actualiza el estado con los favoritos encontrados
    setFavoritos(favoritosGuardados);
  }, []);

  return (
    // Contenedor principal con espacio superior para no quedar oculto por el navbar fijo
    <div className="categoria-page" style={{ paddingTop: '100px' }}>

      {/* Título de la sección */}
      <h1 style={{ color: 'white', marginLeft: '2rem' }}>Tus favoritos ❤️</h1>

      {/* Si hay favoritos guardados, muestra el carrusel con los videos */}
      {favoritos.length > 0 ? (
        <CarruselCategoriaQ 
          titulo="Videos guardados" 
          items={favoritos} 
          onVideoClick={(video) => console.log('clic en video favorito', video)} // Puedes reemplazar por abrir modal
        />
      ) : (
        // Si no hay favoritos, muestra un mensaje informativo
        <p style={{ color: 'white', marginLeft: '2rem' }}>
          Aún no has agregado ningún video a favoritos.
        </p>
      )}
    </div>
  );
};

// Exporta el componente para ser usado en la aplicación
export default Favoritos;
