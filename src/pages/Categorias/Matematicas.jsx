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

  const documentales = [
    {
      titulo: 'La Historia de las Matemáticas',
      youtubeId: 'EFZrYFb4Amk',
      progreso: 80,
      descripcion: 'De Egipto hasta hoy con Marcus du Sautoy.'
    },
    {
      titulo: 'El último teorema de Fermat',
      youtubeId: 'qiNcEguuFSA',
      progreso: 90,
      descripcion: 'La resolución de un enigma de 350 años.'
    },
    {
      titulo: 'The Code (BBC)',
      youtubeId: '5RAtFSEkFho',
      progreso: 60,
      descripcion: 'Patrones matemáticos en la naturaleza.'
    },
    {
      titulo: 'N is a Number',
      youtubeId: 'lMVGmLiKfq4',
      progreso: 90,
      descripcion: 'Un matemático errante que resolvía problemas en el mundo.'
    },
    {
      titulo: 'The Joy of Stats',
      youtubeId: 'jbkSRLYSojo',
      progreso: 90,
      descripcion: 'La estadística moderna contada con humor y visuales.'
    },
    {
      titulo: 'Dimensions',
      youtubeId: 'Yv9bwNnK3zI',
      progreso: 90,
      descripcion: 'Animaciones para comprender dimensiones y geometría.'
    },
    {
      titulo: 'Maryam Mirzakhani',
      youtubeId: 'nySYH-vP8Lk',
      progreso: 90,
      descripcion: 'Primera mujer con Medalla Fields.'
    },
    {
      titulo: 'Las simetrías del universo',
      youtubeId: 'XOAA0fnq-hI',
      progreso: 90,
      descripcion: 'La belleza de la simetría en la naturaleza.'
    }
  ];

  const vidaReal = [
    {
      titulo: 'Matemáticas en el Súper',
      youtubeId: 'IdCP6RiQa4k',
      progreso: 80,
      descripcion: '¿Vale la pena una oferta? Comparaciones y porcentajes.'
    },
    {
      titulo: 'Presupuesto Mensual',
      youtubeId: '_bgUUswBttU',
      progreso: 90,
      descripcion: 'Aprende a manejar tus finanzas personales con matemáticas.'
    },
    {
      titulo: 'Matemáticas en la Construcción',
      youtubeId: 'c1kFcM9SFDg',
      progreso: 60,
      descripcion: 'Uso de geometría en planos y estructuras.'
    },
    {
      titulo: 'Matemáticas en la Moda y el Diseño',
      youtubeId: 'fJC8RyGEZQY',
      progreso: 90,
      descripcion: 'Patrones, simetría y proporciones en la ropa.'
    },
    {
      titulo: 'Deporte y Estadística',
      youtubeId: 'HV349f5MK-o',
      progreso: 90,
      descripcion: 'Analiza el rendimiento deportivo con promedios y gráficos.'
    },
    {
      titulo: 'Planear un Viaje',
      youtubeId: 'zotVCOeXmBk',
      progreso: 90,
      descripcion: 'Presupuesto, gasolina y distancias con lógica matemática.'
    },
    {
      titulo: 'La Importancia de las Matemáticas',
      youtubeId: 'XfHblrcKcvI',
      progreso: 90,
      descripcion: 'Matemáticas para tomar decisiones y comprender el mundo.'
    },
    {
      titulo: 'Encuestas y Decisiones',
      youtubeId: 'nZjzrjqYjSU',
      progreso: 90,
      descripcion: 'Interpretar encuestas, probabilidades y estadísticas.'
    }
  ];

  const grandesMentes = [
    {
      titulo: 'Euclides – El padre de la geometría',
      youtubeId: 'Ge-uLW7mZw4',
      progreso: 80,
      descripcion: 'Autor de “Los Elementos”, obra clave de la geometría.'
    },
    {
      titulo: 'Carl Friedrich Gauss',
      youtubeId: 'hZS4gyerfuw',
      progreso: 90,
      descripcion: 'Contribuciones en álgebra, astronomía y más.'
    },
    {
      titulo: 'Hipatia de Alejandría',
      youtubeId: 'oauxk40qYis',
      progreso: 60,
      descripcion: 'Filósofa y matemática del siglo IV.'
    },
    {
      titulo: 'Alan Turing',
      youtubeId: 'S0C6cTlFQ2Y',
      progreso: 90,
      descripcion: 'Fundador de la informática moderna.'
    },
    {
      titulo: 'Sophie Germain',
      youtubeId: '52D61m2tsik',
      progreso: 90,
      descripcion: 'Pionera en elasticidad y teoría de números.'
    },
    {
      titulo: 'Leonhard Euler',
      youtubeId: 'y-vX8T2XUOY',
      progreso: 90,
      descripcion: 'Introdujo símbolos como Σ, e, i.'
    },
    {
      titulo: 'Srinivasa Ramanujan',
      youtubeId: 'AAGtheVeJA8',
      progreso: 90,
      descripcion: 'Teoría de números y fracciones continuas.'
    },
    {
      titulo: 'Emmy Noether',
      youtubeId: 'ELHAi09zJXM',
      progreso: 90,
      descripcion: 'Revolucionó la física y el álgebra abstracta.'
    }
  ];

  return (
    <div className="categoria-page">
      <HeroBanner
        background={bannerImg}
        title="Matemáticas en tu mundo"
        description="Descubre cómo las matemáticas están presentes en tu día a día."
      />
      <TitleCards title="Videos destacados de Matemáticas" category="matematica" />

      <CarruselCategoriaQ 
        titulo="Matemáticas en el Cine y la Cultura Pop" 
        items={culturaPop}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Documentales" 
        items={documentales}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Matemáticas en la Vida Real" 
        items={vidaReal}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Grandes Mentes Matemáticas" 
        items={grandesMentes}
        onVideoClick={handleAbrirModal}
      />

      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

export default Matematicas;
