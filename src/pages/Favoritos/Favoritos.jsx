// src/pages/Favoritos/Favoritos.jsx
import React, { useEffect, useState } from 'react';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
import Navbar from '../../components/Navbar/Navbar';

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritosGuardados);
  }, []);

  return (
    <div className="categoria-page" style={{ paddingTop: '100px' }}>
      <h1 style={{ color: 'white', marginLeft: '2rem' }}>Tus favoritos ❤️</h1>
      {favoritos.length > 0 ? (
        <CarruselCategoriaQ 
          titulo="Videos guardados" 
          items={favoritos} 
          onVideoClick={(video) => console.log('clic en video favorito', video)} 
        />
      ) : (
        <p style={{ color: 'white', marginLeft: '2rem' }}>Aún no has agregado ningún video a favoritos.</p>
      )}
    </div>
  );
};

export default Favoritos;
