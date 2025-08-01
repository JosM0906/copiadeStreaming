import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Quimica from './pages/Categorias/Quimica';
import VideoQuimica from './pages/Categorias/videoquimica';
import Modal from './pages/Modal/Modal';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quimica" element={<Quimica />} />
        <Route path='/video-quimica' element={<VideoQuimica />} />
      </Routes>
    </Router>
  );
};

export default App;
