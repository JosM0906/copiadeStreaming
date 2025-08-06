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

  const civilizaciones = [
    {
      titulo: 'Las ciudades perdidas',
      youtubeId: 'no3XLXfjk5c', 
      progreso: 80,
      descripcion: 'Relatos de lugares sorprendentes que existieron.'
    },
    {
      titulo: 'Ciudades Perdidas',
      youtubeId: 'gTfICxk9UQ8',
      progreso: 90,
      descripcion: 'Ciudades antiguas borradas de la historia.'
    },
    {
      titulo: '13 ciudades que fueron enterradas',
      youtubeId: 'KPMiMGTtg4U',
      progreso: 90,
      descripcion: 'Vestigios de civilizaciones antiguas.'
    },
    {
      titulo: '10 ciudades perdidas',
      youtubeId: 'cTQVPRuos2s',
      progreso: 90,
      descripcion: 'Misteriosas ciudades ocultas por el tiempo.'
    },
    {
      titulo: 'La urbanización',
      youtubeId: 'dYYL9SrzEuM',
      progreso: 90,
      descripcion: 'Los inicios de las primeras aldeas humanas.'
    },
    {
      titulo: 'Secretos de la Ciudad Maya',
      youtubeId: 'l2BKZ-AqO8I',
      progreso: 90,
      descripcion: 'Exploración profunda del mundo maya.'
    }
  ];

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
  const culturaPop = [
    {
      titulo: 'Una mente brillante',
      youtubeId: 'h_B16qD89aM',
      progreso: 30,
      descripcion: 'John Nash revoluciona la teoría de juegos mientras lucha contra la esquizofrenia.',
    },
    {
      titulo: 'El hombre que conocía el infinito',
      youtubeId: 'Q3bTBAlIZDs',
      progreso: 72,
      descripcion: 'Historia de Ramanujan, genio indio autodidacta.'
    },
    {
      titulo: 'Figuras ocultas',
      youtubeId: 'E4j_LpKzcZQ',
      progreso: 72,
      descripcion: 'Matemáticas afroamericanas en la NASA.'
    },
    {
      titulo: 'La teoría del todo',
      youtubeId: 'iO6h9XFzPGU',
      progreso: 72,
      descripcion: 'Stephen Hawking y su búsqueda por una fórmula del universo.'
    },
    {
      titulo: 'Moneyball',
      youtubeId: 'PwfrGbvxuzM',
      progreso: 72,
      descripcion: 'Beisbol y estadística aplicada.'
    },
    {
      titulo: 'Cube (1997)',
      youtubeId: 'rZgXB2A9qnI',
      progreso: 72,
      descripcion: 'Escape matemático de un cubo mortal.'
    },
    {
      titulo: '21: Blackjack',
      youtubeId: 'Z-I3XvabNvM',
      progreso: 72,
      descripcion: 'Estudiantes del MIT usan matemáticas para contar cartas.'
    },
    {
      titulo: 'The Imitation Game',
      youtubeId: 'Tr4DmyjDXes',
      progreso: 72,
      descripcion: 'Alan Turing descifra códigos nazis.'
    }
  ];
  const arquitectura = [
    {
      titulo: 'CURSO DE COMPUTACIÓN BÁSICA',
      youtubeId: 's_Az3Azecuc',
      progreso: 45,
      descripcion: 'CURSO DE COMPUTACIÓN BÁSICA para PRINCIPIANTES. APRENDE A USAR UN COMPUTADOR DESDE CERO.',
    },
    {
      titulo: 'El teclado: Partes, Funciones y Formas de Interactuar con el Computador',
      youtubeId: 'e1YPNz1ePhQ',
      progreso: 72,
      descripcion: 'Conoce todos los tipos de teclados y cómo usarlos.'
    },
    {
      titulo: 'FEDERICO HOLIK Y EL FUTURO DE LA COMPUTACIÓN CUÁNTICA',
      youtubeId: 'k2tLD1fgV0o',
      progreso: 72,
      descripcion: '¿Qué diferencia hay entre una computadora común y una cuántica?'
    },
    {
      titulo: '¿Qué es y cómo funciona la COMPUTACIÓN CUÁNTICA?',
      youtubeId: 'YpYuBEzfRlM',
      progreso: 72,
      descripcion: '¿Las CPU cuánticas reemplazarán a las actuales?'
    },
    {
      titulo: 'Informática | HARDWARE y SOFTWARE',
      youtubeId: 'gVaE2F0jOJs',
      progreso: 72,
      descripcion: 'Conceptos clave: hardware y software.'
    },
    {
      titulo: 'CURSO DE COMPUTACION PARA ADULTOS GRATIS',
      youtubeId: 'jxAgVn73OWg',
      progreso: 72,
      descripcion: 'Curso de introducción pensado para adultos.'
    },
    {
      titulo: 'COMO APRENDER COMPUTACION',
      youtubeId: 'X9aZCAqA-Ps',
      progreso: 72,
      descripcion: 'Aprende computación desde cero.'
    },
    {
      titulo: 'La HISTORIA DE LA COMPUTADORA',
      youtubeId: 'qBoJj6cvH-A',
      progreso: 72,
      descripcion: 'Desde los años 40 hasta los superordenadores.'
    }
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
        titulo="Civilizaciones antiguas" 
        items={civilizaciones}
        onVideoClick={handleAbrirModal}
      />
        <CarruselCategoriaQ 
        titulo="Experimentos de Química" 
        items={videosQuimica}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Matemáticas en el Cine y la Cultura Pop" 
        items={culturaPop}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Arquitectura de computadoras" 
        items={arquitectura}
        onVideoClick={handleAbrirModal}
      />
      </div>

      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

export default Home;
