import React, { useState } from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBannerBiologia';
import TitleCards from '../../components/TitleCards/TitleCards';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
import VideoModal from '../Modal/VideoModal';


const Biologia = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const handleAbrirModal = (video) => {
    console.log('Video clickeado:', video); // depuración
    setVideoSeleccionado(video);
  };;

  const handleCerrarModal = () => setVideoSeleccionado(null);

  const videosBiologia = [
    {
      titulo: 'Fotosíntesis en acción',
      youtubeId: 'y6JEbJxW1xM',
      progreso: 60,
      descripcion: 'Observa cómo las plantas convierten la luz solar en energía vital.'
    },
    {
      titulo: 'División celular',
      youtubeId: 'hE7gyI7FbxY',
      progreso: 80,
      descripcion: 'Mira cómo se produce la mitosis y la meiosis en las células humanas.'
    },
    {
      titulo: 'ADN y genética',
      youtubeId: 'TtkZzL2lZfQ',
      progreso: 75,
      descripcion: 'Explora los secretos del código genético y su herencia.'
    },
    {
      titulo: 'Ecosistemas y cadenas alimenticias',
      youtubeId: 'fH0gSvT4oYc',
      progreso: 90,
      descripcion: 'Aprende cómo los seres vivos interactúan en su entorno natural.'
    }
  ];

  const Documentales = [
    {
      titulo: 'La vida secreta de las plantas',
      youtubeId: 'zMgTAvbUOSM',
      progreso: 88,
      descripcion: 'Un viaje visual al interior del mundo vegetal.'
    },
    {
      titulo: 'El cuerpo humano por dentro',
      youtubeId: 'ePJrLW1hgf4',
      progreso: 85,
      descripcion: 'Descubre cómo funcionan los sistemas del cuerpo humano.'
    }
  ];

  const Biografias = [
    {
      titulo: 'Charles Darwin',
      youtubeId: 'Y-L4g1vAGyw',
      progreso: 95,
      descripcion: 'Conoce al padre de la teoría de la evolución.'
    },
    {
      titulo: 'Rosalind Franklin',
      youtubeId: 'N2Eb94MUmoU',
      progreso: 92,
      descripcion: 'Su papel clave en el descubrimiento de la estructura del ADN.'
    }
  ];

  const Curiosidades = [
    {
      titulo: 'Datos curiosos del cuerpo humano',
      youtubeId: 'NTwzQwRkEC8',
      progreso: 90,
      descripcion: '¿Sabías que el estómago se renueva cada 3 días?' 
    },
    {
      titulo: 'Animales extraordinarios',
      youtubeId: 'cFYvmxArqqU',
      progreso: 85,
      descripcion: 'Conoce a las especies más extrañas del planeta.'
    }
  ];

  console.log('Video seleccionado:', videoSeleccionado);

  return (
    <div className="categoria-page">
      <HeroBanner
        background={bannerImg}
        title="Biología para todos"
        description="Explora el mundo de los seres vivos y cómo funcionan."
      />
      <TitleCards title="Videos destacados de Biología" category="biologia" />
      <CarruselCategoriaQ 
        titulo="Experimentos Biológicos" 
        items={videosBiologia}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Documentales" 
        items={Documentales}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Biografías científicas" 
        items={Biografias}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Curiosidades de la Biología" 
        items={Curiosidades}
        onVideoClick={handleAbrirModal}
      />
      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

export default Biologia;
