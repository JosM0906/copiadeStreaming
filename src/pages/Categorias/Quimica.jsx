import React, { useState } from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBannerQuimica';
import TitleCards from '../../components/TitleCards/TitleCards';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
import VideoModal from '../Modal/VideoModal';
import bannerImg from '../../assets/bannerQuimica.jpg'; 

const Quimica = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const handleAbrirModal = (video) => setVideoSeleccionado(video);
  const handleCerrarModal = () => setVideoSeleccionado(null);

  const videosQuimica = [
    { titulo: 'Reacciones en casa', youtubeId: 'gyXfzgpM0A4', progreso: 45 },
    { titulo: 'Experimento con fuego', youtubeId: 'QZq1KU8-pB4', progreso: 72 } // asegúrate que no tenga guiones raros
  ];

  return (
    <div className="categoria-page">
      <HeroBanner
        background={bannerImg}
        title="Química en tu mundo"
        description="Descubre cómo la química está presente en tu día a día."
      />
      <TitleCards title="Videos destacados de Química" category="quimica" />
      <CarruselCategoriaQ 
        titulo="Experimentos de Química" 
        items={videosQuimica}
        onVideoClick={handleAbrirModal}
      />

      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

export default Quimica;
