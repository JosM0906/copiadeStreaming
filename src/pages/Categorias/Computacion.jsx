import React, { useState } from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBannerComputacion';
import TitleCards from '../../components/TitleCards/TitleCards';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
import VideoModal from '../Modal/VideoModal';


const Computacion = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const handleAbrirModal = (video) => {
    console.log('Video clickeado:', video); // depuración
    setVideoSeleccionado(video);
  };

  const handleCerrarModal = () => setVideoSeleccionado(null);

  const videosIntro = [
    {
      titulo: '¿Qué es la programación?',
      youtubeId: 'zOjov-2OZ0E',
      progreso: 80,
      descripcion: 'Una introducción clara y concisa al mundo de la programación y cómo se usa en la vida diaria.',
    },
    {
      titulo: '¿Cómo piensa una computadora?',
      youtubeId: 'Uu2PmmuErlI',
      progreso: 60,
      descripcion: 'Explora cómo las computadoras procesan la información mediante instrucciones lógicas.',
    },
    {
      titulo: 'Lenguajes de programación',
      youtubeId: '4iFALQ1ACdA',
      progreso: 90,
      descripcion: 'Conoce los lenguajes más usados en el desarrollo de software actual.',
    },
  ];

  const Algoritmos = [
    {
      titulo: 'Algoritmos en 5 minutos',
      youtubeId: 'jG3bu0tjF0Y',
      progreso: 85,
      descripcion: 'Aprende qué es un algoritmo y cómo se aplica en programación.',
    },
    {
      titulo: 'Pensamiento computacional',
      youtubeId: 'e7D7EoKRiLQ',
      progreso: 75,
      descripcion: 'Desarrolla tu forma de pensar para resolver problemas como un programador.',
    },
    {
      titulo: 'Variables, condiciones y bucles',
      youtubeId: '9h8j3xiWz6U',
      progreso: 90,
      descripcion: 'Conceptos clave para cualquier lenguaje de programación explicados de forma sencilla.',
    },
  ];

  const Historia = [
    {
      titulo: 'Historia de la computación',
      youtubeId: 'O5nskjZ_GoI',
      progreso: 70,
      descripcion: 'Desde los primeros computadores hasta la era moderna de la programación.',
    },
    {
      titulo: 'Alan Turing y la máquina universal',
      youtubeId: '4DgG3b_jEw8',
      progreso: 88,
      descripcion: 'Descubre al pionero de la ciencia de la computación.',
    },
    {
      titulo: 'Evolución de los lenguajes de programación',
      youtubeId: 'rqXOy3jMgeI',
      progreso: 80,
      descripcion: 'Desde el ensamblador hasta Python y JavaScript.',
    },
  ];

  const Curiosidades = [
    {
      titulo: 'Errores famosos en código',
      youtubeId: '7k2HZboF5Fs',
      progreso: 65,
      descripcion: 'Conoce los bugs más costosos y curiosos de la historia.',
    },
    {
      titulo: '¿Por qué usamos 0 y 1?',
      youtubeId: 'Jo8SKzVslmI',
      progreso: 90,
      descripcion: 'Una explicación simple del sistema binario.',
    },
    {
      titulo: 'Las mujeres pioneras en programación',
      youtubeId: 'rM_s2t4YNsI',
      progreso: 85,
      descripcion: 'Conoce a Ada Lovelace, Grace Hopper y otras figuras clave.',
    },
  ];

  const Herramientas = [
    {
      titulo: '¿Qué es Git y para qué sirve?',
      youtubeId: 'SWYqp7iY_Tc',
      progreso: 95,
      descripcion: 'Una guía rápida para comenzar a usar Git en tus proyectos.',
    },
    {
      titulo: 'Visual Studio Code',
      youtubeId: 'VqCgcpAypFQ',
      progreso: 85,
      descripcion: 'Aprende cómo configurar tu editor de código favorito.',
    },
    {
      titulo: 'Terminal para principiantes',
      youtubeId: 'iw8FDDqzT1A',
      progreso: 75,
      descripcion: 'Comandos básicos para programadores novatos.',
    },
  ];

  console.log('Video seleccionado:', videoSeleccionado);

  return (
    <div className="categoria-page">
      <HeroBanner
        background={bannerImg}
        title="Introducción a la Programación"
        description="Aprende los fundamentos de la computación y cómo empezar a programar."
      />
      <TitleCards title="Videos destacados de Computación" category="computacion" />
      <CarruselCategoriaQ 
        titulo="Conceptos básicos de programación" 
        items={videosIntro}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Algoritmos y lógica" 
        items={Algoritmos}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Historia de la programación" 
        items={Historia}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Curiosidades y datos interesantes" 
        items={Curiosidades}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Herramientas para programadores" 
        items={Herramientas}
        onVideoClick={handleAbrirModal}
      />
      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

export default Computacion;
