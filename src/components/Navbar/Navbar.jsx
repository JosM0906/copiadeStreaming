// Importa React y el hook useState para manejar estados
import React, { useState } from 'react';

// Importa el componente Link para navegación entre rutas
import { Link } from 'react-router-dom';

// Importa los estilos del navbar
import './Navbar.css';

// Importa los recursos visuales (imágenes y íconos)
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

// Componente funcional del Navbar
const Navbar = () => {
  // Estado que controla si el menú desplegable está visible (modo móvil)
  const [showMenu, setShowMenu] = useState(false);

  // Función que alterna la visibilidad del menú móvil
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    // Contenedor principal del navbar
    <div className='navbar'>

      {/* Sección izquierda del navbar */}
      <div className="navbar-left">
        {/* Logo de la plataforma */}
        <img src={logo} alt="logo" />

        {/* Botón visible solo en pantallas pequeñas para mostrar el menú */}
        <button className="menu-toggle" onClick={toggleMenu}>
          Explorar
        </button>

        {/* Menú de navegación para pantallas grandes */}
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/matematicas">Matemáticas</Link></li>
          <li><Link to="/historia">Historia</Link></li>
          <li><Link to="/biologia">Biología</Link></li>
          <li><Link to="/computacion">Computación</Link></li>
          <li><Link to="/quimica">Química</Link></li>
          <li><Link to="/favoritos">Favoritos</Link></li>
        </ul>

        {/* Menú desplegable para pantallas pequeñas (responsive) */}
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

      {/* Sección derecha del navbar */}
      <div className="navbar-right">
        {/* Íconos de búsqueda y notificaciones */}
        <img src={search_icon} alt="" className='icons' />
        <img src={bell_icon} alt="" className='icons' />

        {/* Perfil de usuario con menú desplegable */}
        <div className='navbar-profile'>
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" />

          {/* Menú desplegable del perfil (por ejemplo, cerrar sesión) */}
          <div className='dropdown'>
            <p>Sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporta el componente para que pueda usarse en otras partes de la aplicación
export default Navbar;
