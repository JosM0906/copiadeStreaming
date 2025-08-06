import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleBuscador = () => {
    setMostrarBuscador(!mostrarBuscador);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && terminoBusqueda.trim()) {
      navigate(`/busqueda?query=${encodeURIComponent(terminoBusqueda)}`);
      setTerminoBusqueda('');
      setMostrarBuscador(false);
    }
  };

  return (
    <div className='navbar'>
      {/* Sección izquierda */}
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <button className="menu-toggle" onClick={toggleMenu}>Explorar</button>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/matematicas">Matemáticas</Link></li>
          <li><Link to="/historia">Historia</Link></li>
          <li><Link to="/biologia">Biología</Link></li>
          <li><Link to="/computacion">Computación</Link></li>
          <li><Link to="/quimica">Química</Link></li>
          <li><Link to="/favoritos">Favoritos</Link></li>
        </ul>
        <div className={`menu-dropdown ${showMenu ? 'show' : ''}`}>
          <Link to="/home">Home</Link>
          <Link to="/matematicas">Matemáticas</Link>
          <Link to="/historia">Historia</Link>
          <Link to="/biologia">Biología</Link>
          <Link to="/computacion">Computación</Link>
          <Link to="/quimica">Química</Link>
          <Link to="/favoritos">Favoritos</Link>
        </div>
      </div>

      {/* Sección derecha */}
      <div className="navbar-right">
        {/* Lupa */}
        <img
          src={search_icon}
          alt="Buscar"
          className='icons'
          onClick={toggleBuscador}
          style={{ cursor: 'pointer' }}
        />

        {/* Input de búsqueda */}
        {mostrarBuscador && (
          <input
            type="text"
            className="buscador-input"
            placeholder="Buscar..."
            value={terminoBusqueda}
            onChange={(e) => setTerminoBusqueda(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}

        <img src={bell_icon} alt="Notificaciones" className='icons' />

        <div className='navbar-profile'>
          <img src={profile_img} alt="Perfil" className='profile' />
          <img src={caret_icon} alt="Menú" />
          <div className='dropdown'>
            <p>Sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
