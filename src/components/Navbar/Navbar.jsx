import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo" />

        {/* Botón para pantallas pequeñas */}
        <button className="menu-toggle" onClick={toggleMenu}>
          Explorar
        </button>

        {/* Menú normal para pantallas grandes */}
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/matematicas">Matemáticas</Link></li>
          <li><Link to="/historia">Historia</Link></li>
          <li><Link to="/biologia">Biología</Link></li>
          <li><Link to="/computacion">Computación</Link></li>
          <li><Link to="/quimica">Química</Link></li>
        </ul>

        {/* Menú desplegable en móvil */}
        <div className={`menu-dropdown ${showMenu ? 'show' : ''}`}>
          <Link to="/home">Home</Link>
          <Link to="/matematicas">Matemáticas</Link>
          <Link to="/historia">Historia</Link>
          <Link to="/biologia">Biología</Link>
          <Link to="/computacion">Computación</Link>
          <Link to="/quimica">Química</Link>
        </div>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <img src={bell_icon} alt="" className='icons' />
        <div className='navbar-profile'>
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className='dropdown'>
            <p>Sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
