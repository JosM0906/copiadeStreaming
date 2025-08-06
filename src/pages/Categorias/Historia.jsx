import React, { useState } from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBannerHistoria';
import TitleCards from '../../components/TitleCards/TitleCards';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
import VideoModal from '../Modal/VideoModal';
import bannerImg from '../../assets/bannerHistoria.jpg';

const Historia = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const handleAbrirModal = (video) => {
    setVideoSeleccionado(video);
  };

  const handleCerrarModal = () => setVideoSeleccionado(null);

  // Reasignar nombres a tus arrays de video
  const guerras = [
    {
      titulo: 'Los Judíos volverán a su tierra',
      youtubeId: 'nRBgwrjV6Wc',
      progreso: 45,
      descripcion: 'Newton calculó que en 1290 años los judíos se restablecerían en su antigua tierra pero 1290 años a partir de ¿cuándo?',
    },
    {
      titulo: 'La tierra más sagrada',
      youtubeId: 'g6K4cS5IRA4', 
      progreso: 72,
      descripcion: 'Si Newton estuviera vivo y viera el estado de Israel...'
    },
    {
      titulo: '¿Cuándo comenzaría el final?',
      youtubeId: 'SQkGQzEcp0I', 
      progreso: 72,
      descripcion: '1944 es prácticamente el final de la Segunda Guerra Mundial...'
    },
    {
      titulo: 'El apocalipsis se acerca',
      youtubeId: '4JTOOrZ17tE', 
      progreso: 72,
      descripcion: 'Muchos profetas han predicho el fin de los días...'
    },
    {
      titulo: 'Cañon más grande del mundo',
      youtubeId: '8KOBIk66CzI', 
      progreso: 72,
      descripcion: 'En 1941 Hitler preparó una artillería aterradora...'
    },
    {
      titulo: '¡Qué cañon tan grande!',
      youtubeId: 'KoIwIJ9ifIc', 
      progreso: 72,
      descripcion: 'En otoño del 41 las fuerzas soviéticas resistieron...'
    },
    {
      titulo: 'El manuscrito de la guerra',
      youtubeId: 'ktcs6imKW2E', 
      progreso: 72,
      descripcion: 'Descubierto en 1947, este manuscrito hablaba de guerra mundial...'
    },
    {
      titulo: 'Hijos de la oscuridad',
      youtubeId: 'ZAAwWNyyVBA', 
      progreso: 72,
      descripcion: 'Belial es el líder de los hijos de la oscuridad...'
    }
  ];

  const documentales = [
    {
      titulo: 'Alejandro Magno',
      youtubeId: 'yZhYqF9d7-A', 
      progreso: 80,
      descripcion: 'La historia completa de Alejandro Magno...'
    },
    {
      titulo: 'El imperio Romano de Oriente',
      youtubeId: 'NSfCOCRa5lw',
      progreso: 90,
      descripcion: 'Bizancio fue la parte oriental del Imperio romano...'
    },
    {
      titulo: 'Israel y Palestina',
      youtubeId: 's711uFfWXug', 
      progreso: 60,
      descripcion: 'Paisajes, historia y lugares sagrados en Medio Oriente.'
    },
    {
      titulo: 'La verdadera historia detrás del Titanic',
      youtubeId: '3d2Qy5_rt8Q',
      progreso: 90,
      descripcion: '¿Fue realmente inevitable el hundimiento del Titanic?'
    },
    {
      titulo: 'Descubrimiento',
      youtubeId: 'l1hNkUpkk50',
      progreso: 90,
      descripcion: 'Cómo el universo crea los elementos.'
    },
    {
      titulo: 'El infame triángulo de las bermudas',
      youtubeId: 'pP87gDNZrGA',
      progreso: 90,
      descripcion: 'Historias de desapariciones en el Atlántico.'
    },
    {
      titulo: 'Los mayas',
      youtubeId: 'VzgBpxyzQN0',
      progreso: 90,
      descripcion: 'Una civilización misteriosa y avanzada.'
    },
    {
      titulo: '¿Dios habla a través de visiones?',
      youtubeId: 'KOljEzF3vfQ',
      progreso: 90,
      descripcion: 'Inspiración divina o ciencia: una mirada a las visiones.'
    }
  ];

  const personajes = [
    {
      titulo: 'Vladimir Putin',
      youtubeId: '34xdKDlotkQ', 
      progreso: 80,
      descripcion: '¿Cómo se convirtió en uno de los hombres más poderosos del mundo?'
    },
    {
      titulo: 'Grandes Personajes',
      youtubeId: 'i8aAmUGeK-Y',
      progreso: 90,
      descripcion: 'Cosas extrañas que sucedieron a personajes históricos.'
    },
    {
      titulo: 'Henry Ford',
      youtubeId: 'RXHJOJjmfNs', 
      progreso: 60,
      descripcion: 'Fundador de Ford Motor Company y pionero de la producción en masa.'
    },
    {
      titulo: 'Leonardo Da Vinci',
      youtubeId: 'S82Vfp7oMGo',
      progreso: 90,
      descripcion: 'El genio renacentista por excelencia.'
    },
    {
      titulo: 'La historia de Henry Ford',
      youtubeId: '_kT_nspXCkE',
      progreso: 90,
      descripcion: 'Una mirada profunda a la vida de Henry Ford.'
    },
    {
      titulo: 'Los Medici',
      youtubeId: 'BlV6pyp59Fs',
      progreso: 90,
      descripcion: 'La familia más poderosa del Renacimiento.'
    },
    {
      titulo: 'La monarquía Británica',
      youtubeId: 'IPqqy6oqCW4',
      progreso: 90,
      descripcion: '1.000 años de historia de la familia real.'
    },
    {
      titulo: '¿Por qué Leonardo da Vinci es el genio más talentoso?',
      youtubeId: 'gfsX2goHAkI',
      progreso: 90,
      descripcion: 'Una exploración de su genialidad incomparable.'
    }
  ];

  const curiosidades = [
    {
      titulo: '23 increíbles curiosidades del mundo',
      youtubeId: '_lrNQoKZncs', 
      progreso: 80,
      descripcion: 'Cultura, historia y ciencia sorprendente.'
    },
    {
      titulo: '10 datos históricos',
      youtubeId: 'VGhv6xtu9fs',
      progreso: 90,
      descripcion: 'Datos que no te contaron en la escuela.'
    },
    {
      titulo: '31 datos extraños de la historia',
      youtubeId: 'Gu3hHpV-rAk', 
      progreso: 60,
      descripcion: 'Curiosidades reales y difíciles de creer.'
    },
    {
      titulo: '65 curiosidades del mundo',
      youtubeId: 'iNZnnMGypjY',
      progreso: 90,
      descripcion: 'Datos que no conocías del mundo que te rodea.'
    },
    {
      titulo: '1 hora de historia y curiosidades',
      youtubeId: 'Lk8w3SPeCPg',
      progreso: 90,
      descripcion: 'Recorrido por hechos, mitos y maravillas.'
    },
    {
      titulo: '9 curiosidades del mundo antiguo',
      youtubeId: 'R1YWNa-NJpo',
      progreso: 90,
      descripcion: 'Historia de la humanidad desde el inicio.'
    },
    {
      titulo: 'El comercial de cloro que nadie debió ver',
      youtubeId: 'jLFt3Zs-PIU',
      progreso: 90,
      descripcion: 'Un hecho que causó revuelo en la historia de la publicidad.'
    },
    {
      titulo: 'Illuminati',
      youtubeId: 'bQtbz6SPq_s',
      progreso: 90,
      descripcion: 'La sociedad secreta más enigmática del mundo.'
    }
  ];

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
