// Importa React y el hook useState para manejar estados locales
import React, { useState } from 'react';

// Importa componentes personalizados que se usarán en esta página
import HeroBanner from '../../components/HeroBanner/HeroBannerBiologia';
import TitleCards from '../../components/TitleCards/TitleCards';
import CarruselCategoriaQ from '../../components/TitleCards/carruselCategoriaQ';
import VideoModal from '../Modal/VideoModal';

// Importa la imagen del banner para la sección de biología
import bannerImg from '../../assets/bannerBiologia.jpg';

// Componente principal para la sección de Biología
const Biologia = () => {
  // Estado para guardar el video que ha sido seleccionado por el usuario
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  // Función que se ejecuta al hacer clic en un video, abre el modal
  const handleAbrirModal = (video) => {
    console.log('Video clickeado:', video); // depuración
    setVideoSeleccionado(video);
  };

  // Función que cierra el modal
  const handleCerrarModal = () => setVideoSeleccionado(null);

  
  // Lista de videos educativos generales de biología
  const videosBiologia = [
    {
      titulo: 'Aprendiendo Biologia Desde Cero',
      youtubeId: 'KbLw6cB52vQ',
      progreso: 45,
      descripcion: '¿Qué es la Biología? ¿Qué es un ser Vivo?',
    },
    {
      titulo: 'Biología: La célula',
      youtubeId: 'JLNokMENF6s', 
      progreso: 72,
      descripcion: 'Partes de la célula.'
    },
    {
      titulo: '¿Qué es la homeostasis?',
      youtubeId: 'yKQGn1yqfr8', 
      progreso: 72,
      descripcion: 'Explicación rápida y sencilla de la Homeostasis.'
    },
    {
      titulo: '¿Qué son las Enzimas?',
      youtubeId: 'qWeMLG9r0e0', 
      progreso: 72,
      descripcion: 'Funciones y características de las enzimas.'
    },
    {
      titulo: '35 Preguntas de BIOLOGÍA',
      youtubeId: 'TQNdIHgdve4', 
      progreso: 72,
      descripcion: '¡Desafía tus conocimientos biológicos!'
    },
    {
      titulo: '¿Qué es una célula?',
      youtubeId: 'k6a0CYN29ZE', 
      progreso: 72,
      descripcion: 'La célula como componente básico de los seres vivos.'
    },
    {
      titulo: 'Las células procariotas y eucariotas',
      youtubeId: 'FJx0auAdQsw', 
      progreso: 72,
      descripcion: 'Para niños: diferencias entre células procariotas y eucariotas.'
    },
    {
      titulo: '¿Qué son las proteínas?',
      youtubeId: 'u0NC0vGz7PA', 
      progreso: 72,
      descripcion: 'Explicación desde cero.'
    }
  ];

  const documentales = [
    {
      titulo: 'El cuerpo humano',
      youtubeId: 'pLFROEHkC2o', 
      progreso: 80,
      descripcion: 'Regeneración celular en el cuerpo humano.'
    },
    {
      titulo: 'El maravilloso mundo de los hongos',
      youtubeId: 'qzDb526q8-A',
      progreso: 90,
      descripcion: 'DW Documental sobre hongos.'
    },
    {
      titulo: 'Los Secretos de las Plantas',
      youtubeId: '3OkcXj87vd0', 
      progreso: 60,
      descripcion: 'Supervivencia y evolución vegetal.'
    },
    {
      titulo: 'La asombrosa inteligencia de los abejorros',
      youtubeId: '58cHRv_yvDU',
      progreso: 90,
      descripcion: 'Exploración de la inteligencia en insectos.'
    },
    {
      titulo: 'Planeta Humano',
      youtubeId: 'Qd3yuug9XU4',
      progreso: 90,
      descripcion: 'Documental del cuerpo humano.'
    },
    {
      titulo: '¿Cómo surgió el ser humano?',
      youtubeId: '_MGELqOFzO0',
      progreso: 90,
      descripcion: 'DW Documental sobre el origen humano.'
    },
    {
      titulo: '¿Cuánto Sabes de BIOLOGÍA?',
      youtubeId: 't_kbksviWx8',
      progreso: 90,
      descripcion: '50 preguntas para mentes curiosas.'
    },
    {
      titulo: 'REINO DE INSECTOS',
      youtubeId: 'JSsuISixwAU',
      progreso: 90,
      descripcion: 'Una vida en miniatura fascinante.'
    }
  ];

  const biografias = [
    {
      titulo: 'Padres de la Biología',
      youtubeId: 'ZHpwWi-eDmI', 
      progreso: 80,
      descripcion: 'EnClaseBiología presenta los padres de esta ciencia.'
    },
    {
      titulo: '¿En qué trabajan los biólogos?',
      youtubeId: 'AISLN56qFxk',
      progreso: 90,
      descripcion: 'El trabajo real de los biólogos.'
    },
    {
      titulo: 'Nikolaas Tinbergen',
      youtubeId: 'jVmN-I85-z0', 
      progreso: 60,
      descripcion: 'Biografía del Nobel de medicina.'
    },
    {
      titulo: 'Vavilov, el genetista y biólogo',
      youtubeId: 'dKcEak2K4v0',
      progreso: 90,
      descripcion: 'Cambió el rumbo de la genética.'
    },
    {
      titulo: 'Teorías de la evolución',
      youtubeId: 'CBAwcRaVzA4',
      progreso: 90,
      descripcion: 'Fijismo, Lamarck, Darwin...'
    },
    {
      titulo: 'Darwin y Wallace',
      youtubeId: 'FYMo8ajD9Ow',
      progreso: 90,
      descripcion: 'Teoría explicada fácil y rápido.'
    },
    {
      titulo: 'Biología Molecular',
      youtubeId: 'm7Eq3KP6ims',
      progreso: 90,
      descripcion: 'Historia y desarrollo del área.'
    },
    {
      titulo: 'Leyes de Mendel',
      youtubeId: 'LXXK2l1pdv8',
      progreso: 90,
      descripcion: 'Cuadro de Punnett paso a paso.'
    }
  ];

  const curiosidades = [
    {
      titulo: '10 datos curiosos del océano',
      youtubeId: 'IVARo0TFR2s', 
      progreso: 80,
      descripcion: 'El 93% de la vida está en el océano.'
    },
    {
      titulo: '¿Cómo funciona el cerebro?',
      youtubeId: 'UOusAbYrRL8',
      progreso: 90,
      descripcion: 'Animación del funcionamiento cerebral.'
    },
    {
      titulo: '25 Curiosidades sobre el cuerpo humano',
      youtubeId: 'XdwsLP3T_d8', 
      progreso: 60,
      descripcion: 'Datos que probablemente no conocías.'
    },
    {
      titulo: '20 curiosidades sobre el cuerpo humano',
      youtubeId: 'PhVdbkbf0e4',
      progreso: 90,
      descripcion: 'Datos increíbles explicados por expertos.'
    },
    {
      titulo: '50 datos sobre animales',
      youtubeId: 'ZT0qVPlH-QY',
      progreso: 90,
      descripcion: 'Lo que nunca te contaron en clase.'
    },
    {
      titulo: 'Cosas de biología que debes saber',
      youtubeId: 'RA5b9Ao9nW8',
      progreso: 90,
      descripcion: 'LUCA, fotosíntesis y más.'
    },
    {
      titulo: '100 preguntas de medicina',
      youtubeId: 'xXB4zU_N0jY',
      progreso: 90,
      descripcion: 'Prueba tus conocimientos médicos.'
    },
    {
      titulo: '1 hora contestando preguntas curiosas',
      youtubeId: 's0b9NVq_M-w',
      progreso: 90,
      descripcion: 'Un repaso divertido por la biología.'
    }
  ];

  const simuladores = [
    {
      titulo: 'Tipos de células - simulador interactivo',
      youtubeId: 'Jlt08cVV-qo', 
      progreso: 80,
      descripcion: 'Simulador educativo para docentes.'
    },
    {
      titulo: 'Uso simulador PHET Biología II',
      youtubeId: 'djRWYwn4v5A',
      progreso: 90,
      descripcion: 'Explora el simulador PHET para biología.'
    },
    {
      titulo: 'Simulaciones con Python',
      youtubeId: '75DmkkFVnUw',
      progreso: 90,
      descripcion: 'Simulaciones científicas con programación.'
    },
    {
      titulo: 'Simulador de laboratorio de microbiología',
      youtubeId: 'p-vnjJtc5AM',
      progreso: 90,
      descripcion: 'Simula la identificación de bacterias.'
    },
    {
      titulo: 'Simulación del Operón Lac',
      youtubeId: 'qCDIXzPH7Rc',
      progreso: 90,
      descripcion: 'Modelo genético explicativo en Java.'
    },
    {
      titulo: 'Simulador Biología',
      youtubeId: '14pDZQB9sto',
      progreso: 90,
      descripcion: 'Funcionamiento del simulador educativo.'
    }
  ];

  return (
    // Contenedor principal de toda la sección de Biología
    <div className="categoria-page">
      <HeroBanner
        background={bannerImg}
        title="Biología en tu mundo"
        description="Descubre cómo la biología está presente en tu día a día."
      />
      <TitleCards title="Videos destacados de biología" category="biologia" />
      <CarruselCategoriaQ 
        titulo="Experimentos de biología" 
        items={videosBiologia}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Documentales" 
        items={documentales}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Biografías" 
        items={biografias}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Curiosidades" 
        items={curiosidades}
        onVideoClick={handleAbrirModal}
      />
      <CarruselCategoriaQ 
        titulo="Simuladores" 
        items={simuladores}
        onVideoClick={handleAbrirModal}
      />
      <VideoModal video={videoSeleccionado} onClose={handleCerrarModal} />
    </div>
  );
};
// Exporta el componente para que pueda ser utilizado en otras partes del proyecto
export default Biologia;