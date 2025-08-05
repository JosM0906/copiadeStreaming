// App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

// Categorías
import Quimica from './pages/Categorias/Quimica';
import VideoQuimica from './pages/Categorias/videoquimica';

import Historia from './pages/Categorias/Historia';
import VideoHistoria from './pages/Categorias/videohistoria';

import Matematicas from './pages/Categorias/Matematicas';
import VideoMatematicas from './pages/Categorias/videomatematicas';

import Biologia from './pages/Categorias/Biologia';
import VideoBiologia from './pages/Categorias/videobiologia';

import Computacion from './pages/Categorias/Computacion';
import VideoComputacion from './pages/Categorias/videocomputacion';

import Favoritos from './pages/Favoritos/Favoritos';

const AppWrapper = () => {
  const location = useLocation();

  return (
    <>
      {/* Mostrar navbar en todas las rutas excepto en "/" */}
      {location.pathname !== '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

        {/* Rutas por categoría */}
        <Route path="/quimica" element={<Quimica />} />
        <Route path="/video-quimica" element={<VideoQuimica />} />

        <Route path="/historia" element={<Historia />} />
        <Route path="/video-historia" element={<VideoHistoria />} />

        <Route path="/matematicas" element={<Matematicas />} />
        <Route path="/video-matematicas" element={<VideoMatematicas />} />

        <Route path="/biologia" element={<Biologia />} />
        <Route path="/video-biologia" element={<VideoBiologia />} />

        <Route path="/computacion" element={<Computacion />} />
        <Route path="/video-computacion" element={<VideoComputacion />} />

        {/* Ruta de favoritos */}
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </>
  );
};

const App = () => {
  return <AppWrapper />;
};

export default App;
