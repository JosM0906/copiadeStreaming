import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/Play_icon.png';
import info_icon from '../../assets/info_icon.png';

import VideoModal from '../Modal/VideoModal';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';

const Home = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const handleAbrirModal = (video) => {
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

  const algoritmos = [
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

  return (
    <div className="home">
      <Navbar />

      {/* Hero principal */}
      <div className="Hero">
        <img src={hero_banner} alt="Banner principal" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="Título del curso" className="caption-img" />
          <p>
            Un curso paso a paso si deseas comenzar en el mundo de la Programación Web.
            En este curso aprenderás 10 Lenguajes y Tecnologías Web:
            HTML, CSS, SASS, Workflows, JavaScript, Fetch, PHP, POO - MVC, MySQL - SQL y API's
          </p>
          <div className="hero-btns">
            <button className="btn"><img src={play_icon} alt="" />Reproducir</button>
            <button className="btn dark-btn"><img src={info_icon} alt="" />Más info</button>
          </div>
        </div>
      </div>

      {/* Carruseles debajo del Hero */}
      <div className="home-content">
        <CarruselCategoriaQ 
          titulo="Conceptos básicos de programación" 
          items={videosIntro} 
          onVideoClick={handleAbrirModal} 
        />
        <CarruselCategoriaQ 
          titulo="Algoritmos y lógica" 
          items={algoritmos} 
          onVideoClick={handleAbrirModal} 
        />
      </div>

      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

export default Home;
