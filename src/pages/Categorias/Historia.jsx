import React, { useState } from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBannerHistoria';
import TitleCards from '../../components/TitleCards/TitleCards';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
import VideoModal from '../Modal/VideoModal';

const Historia = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const handleAbrirModal = (video) => {
    console.log('Video clickeado:', video); // depuración
    setVideoSeleccionado(video);
  };

  const handleCerrarModal = () => setVideoSeleccionado(null);

  const guerras = [
    {
      titulo: 'Primera Guerra Mundial',
      youtubeId: 'dV3A3Jk1G5Q',
      progreso: 80,
      descripcion: 'Descubre cómo comenzó la Gran Guerra y sus consecuencias en el mundo moderno.'
    },
    {
      titulo: 'Segunda Guerra Mundial',
      youtubeId: 'qEnEhQ6gnL8',
      progreso: 90,
      descripcion: 'Una visión general del conflicto más devastador del siglo XX.'
    }
  ];

  const civilizaciones = [
    {
      titulo: 'Antiguo Egipto',
      youtubeId: 'sRZqMGAj_yI',
      progreso: 85,
      descripcion: 'Pirámides, faraones y una cultura milenaria que aún fascina.'
    },
    {
      titulo: 'Imperio Romano',
      youtubeId: 'TLWB0GJ1X2k',
      progreso: 90,
      descripcion: 'Conoce cómo Roma se convirtió en uno de los imperios más poderosos.'
    }
  ];

  const personajes = [
    {
      titulo: 'Napoleón Bonaparte',
      youtubeId: 'Uzh0fTjVPk4',
      progreso: 80,
      descripcion: 'El ascenso y caída del emperador francés.'
    },
    {
      titulo: 'Simón Bolívar',
      youtubeId: 'UQ_u8yKzbrE',
      progreso: 85,
      descripcion: 'Conoce al libertador de América.'
    }
  ];

  const documentales = [
    {
      titulo: 'Historia del mundo en 2 horas',
      youtubeId: 'oTQlQpSY4uQ',
      progreso: 95,
      descripcion: 'Un viaje visual desde el Big Bang hasta el presente.'
    },
    {
      titulo: 'La Edad Media',
      youtubeId: 'm7S9yufm2e8',
      progreso: 75,
      descripcion: 'Castillos, cruzadas y reinos europeos medievales.'
    }
  ];

  const curiosidades = [
    {
      titulo: 'Datos curiosos de la historia',
      youtubeId: 'C2Z-k9_LmME',
      progreso: 80,
      descripcion: 'Hechos sorprendentes que no conocías.'
    },
    {
      titulo: 'Errores históricos famosos',
      youtubeId: 'iYNEt53Ylps',
      progreso: 90,
      descripcion: 'Descubre decisiones que cambiaron la historia por error.'
    }
  ];

  console.log('Video seleccionado:', videoSeleccionado);

  return (
    <div className="categoria-page">
      <HeroBanner
        background={bannerImg}
        title="Historia en tu mundo"
        description="Explora los eventos y personajes que dieron forma a nuestra civilización."
      />
      <TitleCards title="Videos destacados de Historia" category="historia" />
      <CarruselCategoriaQ 
        titulo="Guerras históricas" 
        items={guerras}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Civilizaciones antiguas" 
        items={civilizaciones}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Personajes históricos" 
        items={personajes}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Documentales de historia" 
        items={documentales}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Curiosidades históricas" 
        items={curiosidades}
        onVideoClick={handleAbrirModal}
      />
      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

export default Historia;
