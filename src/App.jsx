import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Quimica from './pages/Categorias/Quimica';
import VideoQuimica from './pages/Categorias/videoquimica';

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Oculta la Navbar si estás en la página de Login */}
      {location.pathname !== '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quimica" element={<Quimica />} />
        <Route path="/video-quimica" element={<VideoQuimica />} />
      </Routes>
    </>
  );
};

export default App;
