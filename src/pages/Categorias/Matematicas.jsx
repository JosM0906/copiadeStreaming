import React, { useState } from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBannerMate';
import TitleCards from '../../components/TitleCards/TitleCards';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
import VideoModal from '../Modal/VideoModal';
import bannerImg from '../../assets/bannerMatematicas.jpg';

const Matematicas = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const handleAbrirModal = (video) => {
    console.log('Video clickeado:', video);
    setVideoSeleccionado(video);
  };

  const handleCerrarModal = () => setVideoSeleccionado(null);

  const videosMatematicas = [
    {
      titulo: 'Geometría en el mundo real',
      youtubeId: 'Z1Yd7upQsXY',
      progreso: 60,
      descripcion: 'Explora cómo se aplica la geometría en la arquitectura, diseño y naturaleza.',
    },
    {
      titulo: 'Fracciones divertidas',
      youtubeId: 'IdU0z3e_v7I',
      progreso: 45,
      descripcion: 'Aprende fracciones con ejemplos visuales e intuitivos.',
    },
    {
      titulo: 'La magia del Álgebra',
      youtubeId: 'vmB0DpGRQ5I',
      progreso: 70,
      descripcion: 'Descubre cómo resolver ecuaciones de forma simple y lógica.',
    },
    {
      titulo: 'Figuras en movimiento',
      youtubeId: 'y3X7z6e9DGs',
      progreso: 80,
      descripcion: 'Relación entre la geometría y el movimiento en la física.',
    },
  ];

  const Documentales = [
    {
      titulo: 'Historia de las Matemáticas',
      youtubeId: 'o_UoDgOYjQo',
      progreso: 90,
      descripcion: 'Un recorrido desde Pitágoras hasta la matemática moderna.',
    },
    {
      titulo: 'El lenguaje del universo',
      youtubeId: 'ewRjZoRtu0Y',
      progreso: 85,
      descripcion: 'Descubre cómo las matemáticas explican el mundo.',
    },
  ];

  const Biografías = [
    {
      titulo: 'Pitágoras',
      youtubeId: 'bRjbHnD2Z_U',
      progreso: 88,
      descripcion: 'Conoce la vida del padre del teorema más famoso.',
    },
    {
      titulo: 'Isaac Newton',
      youtubeId: 'kzLpN4SQtJQ',
      progreso: 85,
      descripcion: 'Más allá de la física, Newton fue un gran matemático.',
    },
  ];

  const Curiosidades = [
    {
      titulo: '¿Por qué π nunca termina?',
      youtubeId: 'TdqXrPSw5Q4',
      progreso: 75,
      descripcion: 'Explora los números irracionales con ejemplos curiosos.',
    },
    {
      titulo: 'La paradoja del infinito',
      youtubeId: 'UnURElCzGc0',
      progreso: 78,
      descripcion: 'Una explicación accesible de uno de los temas más intrigantes.',
    },
  ];

  const Algebra = [
    {
      titulo: 'Ecuaciones lineales',
      youtubeId: '1ZVw9cHjZVE',
      progreso: 80,
      descripcion: 'Aprende a resolver ecuaciones paso a paso.',
    },
    {
      titulo: 'Factorización divertida',
      youtubeId: 'tOhUO3MT5aA',
      progreso: 90,
      descripcion: 'Cómo factorizar expresiones algebraicas sin complicaciones.',
    },
  ];

  console.log('Video seleccionado:', videoSeleccionado);

  return (
    <div className="categoria-page">
      <HeroBanner
        background={bannerImg}
        title="Matemáticas para todos"
        description="Explora el fascinante mundo de los números y la lógica."
      />
      <TitleCards title="Videos destacados de Matemáticas" category="matematicas" />
      <CarruselCategoriaQ 
        titulo="Matemáticas cotidianas" 
        items={videosMatematicas}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Documentales" 
        items={Documentales}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Biografías de Matemáticos" 
        items={Biografías}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Curiosidades Matemáticas" 
        items={Curiosidades}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Álgebra en acción" 
        items={Algebra}
        onVideoClick={handleAbrirModal}
      />
      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

export default Matematicas;
