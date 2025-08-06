// Importa React y el hook useState para manejar el estado del componente
import React, { useState } from 'react';
// Importa el banner específico para la sección de Computación
import HeroBanner from '../../components/HeroBanner/HeroBannerComputacion';
// Importa el componente que muestra el título y estilo de tarjetas
import TitleCards from '../../components/TitleCards/TitleCards';
// Importa el carrusel reutilizable para mostrar listas de videos
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
// Importa el componente de ventana emergente (modal) para mostrar los videos
import VideoModal from '../Modal/VideoModal';
// Importa la imagen de fondo para el banner de Computación
import bannerImg from '../../assets/bannerComputacion.jpg';


// Componente principal de la sección de Computación
const Computacion = () => {
  // Estado que guarda el video actualmente seleccionado para mostrar en el modal
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);
  // Función que se ejecuta cuando el usuario hace clic en un video
  // Guarda el video clickeado en el estado y lo muestra en el modal
  const handleAbrirModal = (video) => {
    console.log('Video clickeado:', video); // Mensaje de depuración para la consola
    setVideoSeleccionado(video);
  };
  // Función que cierra el modal al limpiar el video seleccionado
  const handleCerrarModal = () => setVideoSeleccionado(null);
  
// Lista de videos educativos generales de computacion
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

  const documentales = [
    {
      titulo: 'La PRIMERA GENERACIÓN DE COMPUTADORAS',
      youtubeId: 'DTnJSsO1oEo',
      progreso: 80,
      descripcion: 'Origen, hardware y modelos de las primeras computadoras.'
    },
    {
      titulo: 'Potencial y riesgos de un nuevo supercomputador',
      youtubeId: 'vRCasWrsSiE',
      progreso: 90,
      descripcion: 'DW Documental sobre nuevos superordenadores.'
    },
    {
      titulo: 'La Historia de la Computadora y Computación',
      youtubeId: '7eOKcLnm0Xo',
      progreso: 60,
      descripcion: 'Documental completo sobre la evolución tecnológica.'
    },
    {
      titulo: 'Historia de la Computación',
      youtubeId: 'CLBysCBzJWo',
      progreso: 90,
      descripcion: 'Documental sobre el desarrollo histórico de la informática.'
    },
    {
      titulo: '¿Por qué estaban hechas de bombillas?',
      youtubeId: 'LvhhcsLrHDw',
      progreso: 90,
      descripcion: 'Curiosidades sobre las primeras computadoras.'
    },
    {
      titulo: 'Historia de la INFORMÁTICA',
      youtubeId: 'wawVLmh3vl8',
      progreso: 90,
      descripcion: 'Desde el procesamiento de datos hasta la era digital.'
    },
    {
      titulo: 'La verdad sobre la ciberseguridad',
      youtubeId: '3FVG_1kNBXA',
      progreso: 90,
      descripcion: 'Documental gratuito sobre seguridad digital.'
    },
    {
      titulo: 'La revolución de la IA y la computación cuántica',
      youtubeId: 'sgJy6dklpUw',
      progreso: 90,
      descripcion: 'Impacto de la inteligencia artificial y la computación cuántica.'
    }
  ];

  const biografias = [
    {
      titulo: 'Personajes olvidados',
      youtubeId: 'TBC8h10GdB4',
      progreso: 80,
      descripcion: 'Sir Clive Sinclair y otros científicos olvidados.'
    },
    {
      titulo: 'Personajes Históricos',
      youtubeId: 'I7WNwBhGpg4',
      progreso: 90,
      descripcion: 'Los pioneros de la computación.'
    },
    {
      titulo: '10 personajes históricos en la computación',
      youtubeId: '3ZOPr1XDs7c',
      progreso: 90,
      descripcion: 'Reseña de los científicos que impulsaron la informática.'
    },
    {
      titulo: 'Personajes importantes',
      youtubeId: 'VXJ5cjV42gM',
      progreso: 90,
      descripcion: 'Contribuciones clave en la evolución tecnológica.'
    },
    {
      titulo: 'Personajes olvidados de la historia',
      youtubeId: 'EzjBvjNQ2uM',
      progreso: 90,
      descripcion: 'Personalidades opacadas por la historia.'
    },
    {
      titulo: 'Personajes Importantes de la Informática',
      youtubeId: 'y0O8DuPLloY',
      progreso: 90,
      descripcion: 'Presentación animada de figuras clave.'
    },
    {
      titulo: 'La historia del ordenador',
      youtubeId: '3KC0GecDd-4',
      progreso: 90,
      descripcion: 'La evolución de los ordenadores a través del tiempo.'
    }
  ];

  const curiosidades = [
    {
      titulo: 'Curiosidades del mundo de la informática',
      youtubeId: 'ncZ8nAkuTmY',
      progreso: 80,
      descripcion: 'Datos divertidos para compartir con amigos.'
    },
    {
      titulo: '12 Curiosidades Informáticas',
      youtubeId: 'N3OrHt9-7Eg',
      progreso: 60,
      descripcion: 'Descubre lo más sorprendente de la tecnología.'
    },
    {
      titulo: '10 curiosidades que quizás no conozcas',
      youtubeId: 'Azc9ksZ2xy4',
      progreso: 90,
      descripcion: 'Anécdotas e hitos de la informática.'
    },
    {
      titulo: '1 hora de curiosidades de hackers',
      youtubeId: '_x-I8idHQT0',
      progreso: 90,
      descripcion: 'Historias fascinantes del mundo hacker.'
    },
    {
      titulo: '8 Datos curiosos de la informática',
      youtubeId: 'c_5XZehzn-s',
      progreso: 90,
      descripcion: 'Para entretener, informar y ayudar con tareas.'
    },
    {
      titulo: '30 Curiosidades increíbles',
      youtubeId: 'KvxcYUXNEuQ',
      progreso: 90,
      descripcion: 'Una compilación para sorprender.'
    }
  ];

  const uso = [
    {
      titulo: 'Usos de la computadora',
      youtubeId: 'bXNE1WnyR9c',
      progreso: 80,
      descripcion: 'Experiencias seguras para niños y familias.'
    },
    {
      titulo: 'Clase 3 - Utilidad de la computadora',
      youtubeId: 'ZGIwHAAeX80',
      progreso: 90,
      descripcion: 'Educación básica para niños.'
    },
    {
      titulo: 'Utilidad de la computadora',
      youtubeId: 'OP52GzromxM',
      progreso: 90,
      descripcion: 'Aplicaciones comunes en la vida diaria.'
    },
    {
      titulo: 'Utilidades y Beneficios',
      youtubeId: '_b_H7gmzBUo',
      progreso: 90,
      descripcion: 'Resumen de beneficios principales.'
    },
    {
      titulo: 'Definición y utilidad del computador',
      youtubeId: 'weAnB1K3bok',
      progreso: 90,
      descripcion: 'Importancia del computador.'
    },
    {
      titulo: 'Definición y utilidad del computador',
      youtubeId: 'weAnB1K3bok',
      progreso: 90,
      descripcion: 'Importancia del computador.'
    }
    
    
  ];

  return (
    // Contenedor principal de toda la sección de Computacion
    <div className="categoria-page">
      <HeroBanner
        background={bannerImg}
        title="Computación en tus manos"
        description="Descubre cómo la computación está presente en nuestros espacios."
      />
      <TitleCards title="Videos destacados de Computación" category="computacion" />
      <CarruselCategoriaQ 
        titulo="Arquitectura de computadoras" 
        items={arquitectura}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Documentales" 
        items={documentales}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Biografías de Científicos" 
        items={biografias}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Curiosidades de la computadora" 
        items={curiosidades}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="El uso actual de la computación" 
        items={uso}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="El uso actual de la computación" 
        items={uso}
        onVideoClick={handleAbrirModal}
      />
      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otras partes del proyecto
export default Computacion;
