import React, { useState } from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBannerQuimica';
import TitleCards from '../../components/TitleCards/TitleCards';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
import VideoModal from '../Modal/VideoModal';
import bannerImg from '../../assets/bannerQuimica.jpg'; 

const Quimica = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const handleAbrirModal = (video) => {
    console.log('Video clickeado:', video); // depuración
    setVideoSeleccionado(video);
  };

  const handleCerrarModal = () => setVideoSeleccionado(null);

  const videosQuimica = [
    {
      titulo: 'Reacciones en casa',
      youtubeId: 'gyXfzgpM0A4',
      progreso: 45,
      descripcion: 'Este experimento te enseña cómo reacciones químicas simples pueden generar efectos sorprendentes como burbujas inflamables.',
    },
    {
      titulo: 'Experimento con fuego',
      youtubeId: 'QZq1KU8-pB4', 
      progreso: 72,
      descripcion: 'Una reacción controlada con fuego para estudiar combustión.'
    },
    {
      titulo: 'Reacciones de cambio',
      youtubeId: 'PZLN8SWEOhQ', 
      progreso: 72,
      descripcion: 'Ve como puedes hacer reacciones con cambios de color'
    },
    {
      titulo: 'Oxigeno en el aire',
      youtubeId: 'BNUH28WERSk', 
      progreso: 72,
      descripcion: 'Descubre como puedes ver Porcentajes de Oxigeno en el aire'
    },
    {
      titulo: 'Globo con vinagre',
      youtubeId: '0gDQcTVjyhs', 
      progreso: 72,
      descripcion: 'Experimento de como inflar un globo con vinagre y cascara de huevo'
    },
    {
      titulo: 'Velocidades',
      youtubeId: 'ExH_YRfYToI', 
      progreso: 72,
      descripcion: 'Descubre la velocidad de una reaccion química'
    },
    {
      titulo: 'Airbag',
      youtubeId: '0kj1OJcXJIQ', 
      progreso: 72,
      descripcion: 'Descubre como es un airbag casero.'
    },
    {
      titulo: 'Huebo que bota',
      youtubeId: 'hOGEn0r5MHE', 
      progreso: 72,
      descripcion: 'Descubre como formar un huevo que bota'
    }
  ];

  const Documentales = [
  {
    titulo: 'La tabla periódica',
    youtubeId: 'aZoa0XvQVzc', 
    progreso: 80,
    descripcion: 'La gran historia edicion especial'
  },
  {
    titulo: 'El origen de los elementos químicos',
    youtubeId: 'nT3xl8GISSg',
    progreso: 90,
    descripcion: 'Enterate del origen quimico'
  },
  {
    titulo: 'Química',
    youtubeId: '99HNY7NUbNY', 
    progreso: 60,
    descripcion: 'Descubrimientos mas grandes'
  },
   {
    titulo: 'Más allá del átomo',
    youtubeId: 'FJKhnATrZWc',
    progreso: 90,
    descripcion: 'Un increíble inmersión en el corazón de la materia y lo infinitamente pequeño'
  },
   {
    titulo: 'Descubrimiento',
    youtubeId: 'l1hNkUpkk50',
    progreso: 90,
    descripcion: 'Como el universo crea los elementos'
  },
   {
    titulo: 'Carbono',
    youtubeId: '_ytYQsP8Lxc',
    progreso: 90,
    descripcion: 'Descubre por que es el elemento mas misterioso y poderoso de la tierra'
  },
   {
    titulo: 'Hidrógeno',
    youtubeId: 'fKUqz3cdT2Q',
    progreso: 90,
    descripcion: 'El gas ms ligero del universo'
  },
   {
    titulo: 'Oxigeno',
    youtubeId: 'x-zzOrbsdPs',
    progreso: 90,
    descripcion: 'La molécula que creo el mundo'
  },

];

  const Biografías = [
  {
    titulo: 'Marie Curie',
    youtubeId: 'csNoRz2xhYA', 
    progreso: 80,
    descripcion: 'Descubre la tragica historia de Marie Curie y la radiactividad'
  },
  {
    titulo: 'Dmitri Mendeléyev',
    youtubeId: '_rSSCpXun6g',
    progreso: 90,
    descripcion: 'Descubre a Dmitri y la tabla periodica'
  },
  {
    titulo: 'Antoine Lavoisier',
    youtubeId: 'C2_myexwGFQ', 
    progreso: 60,
    descripcion: 'Antonie y su aporte a la quimica'
  },
   {
    titulo: 'Linus Pauling',
    youtubeId: 'vrc0TsIk2dY',
    progreso: 90,
    descripcion: 'El enlace quimico y la paz mundial'
  },
   {
    titulo: 'Michael Faraday',
    youtubeId: 'l1hNkUpkk50',
    progreso: 90,
    descripcion: 'Descubre la maravillosa historia de este científico'
  },
   {
    titulo: 'Robert Boyle',
    youtubeId: 'RCT2AjEnf-k',
    progreso: 90,
    descripcion: 'El padre de la quimica moderna'
  },
   {
    titulo: 'Alfred Nobel',
    youtubeId: 'k_A6YmOCK-c',
    progreso: 90,
    descripcion: 'Alfred Nobel y la dinamita'
  },
   {
    titulo: 'Joseph Priestley',
    youtubeId: 'Ycs1zO-jJEY',
    progreso: 90,
    descripcion: 'Joseph Priestley y el descubrimiento del oxígeno'
  },

];


  const Curiosidades = [
  {
    titulo: 'Lavoisier',
    youtubeId: 'rLSLB1WdlqI', 
    progreso: 80,
    descripcion: 'La triste historia de Lavoiser'
  },
  {
    titulo: '5 datos curiosos',
    youtubeId: 'XFX3rbbS0Vo',
    progreso: 90,
    descripcion: 'Datos curiosos que no conocias'
  },
  {
    titulo: 'Datos curiosos de la quimica #2',
    youtubeId: 'QE6fGdrBZE0', 
    progreso: 60,
    descripcion: 'Descubre la quimica'
  },
   {
    titulo: 'Mitos científicos',
    youtubeId: 'OmbbCnDFWwc',
    progreso: 90,
    descripcion: '15 mitos cientificos desmentidos'
  },
   {
    titulo: 'Mercurio',
    youtubeId: '4tAxEsVF5VA',
    progreso: 90,
    descripcion: 'Este video puede salvarte la vida'
  },
   {
    titulo: 'La quimica de las calorías',
    youtubeId: 'nai9k6CeEJ0',
    progreso: 90,
    descripcion: '¿Por qué subimos y bajamos de peso?'
  },
   {
    titulo: 'Quimica en la salud',
    youtubeId: 'k_A6YmOCK-c',
    progreso: 90,
    descripcion: 'Descubre todo lo que tienes que saber del cáncer'
  },
   {
    titulo: 'Joseph Priestley',
    youtubeId: 'Ycs1zO-jJEY',
    progreso: 90,
    descripcion: 'Joseph Priestley y el descubrimiento del oxígeno'
  },

];
  console.log('Video seleccionado:', videoSeleccionado);


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
      <CarruselCategoriaQ 
        titulo="Documentales" 
        items={Documentales}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Biografías de Científicos" 
        items={Biografías}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Curiosidades de la quimica" 
        items={Curiosidades}
        onVideoClick={handleAbrirModal}
      />
      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

export default Quimica;
