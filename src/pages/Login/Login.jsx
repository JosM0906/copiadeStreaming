import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import logo from '../../assets/logo.png';
import fondo from '../../assets/background_banner.jpg';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  
  // Simula un usuario permitido
    const validEmail = 'admin@eduzine.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      // Guardar en localStorage como "usuario logueado"
      localStorage.setItem('auth', 'true');
      navigate('/home');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div>
      {/* Fondo con imagen */}
      <div
        className="background"
        style={{
          backgroundImage: `url(${fondo})`,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          opacity: 0.7,
        }}
      ></div>

      {/* Logo */}
      <img src={logo} alt="logo" className="logo" />

      {/* Formulario */}
      <div className="form-wrapper">
        <h2>Inicia Sesión</h2>

        <form onSubmit={handleLogin}>
          <div className="form-control">
            <input type="text" required />
            <label>Email o número de celular</label>
          </div>

          <div className="form-control">
            <input type="password" required />
            <label>Contraseña</label>
          </div>

          <button type="submit">Iniciar sesión</button>

          <div className="form-help">
            <div className="login-container">
              <div style={{ textAlign: 'center', padding: '5px' }}>
                <label style={{ color: 'white' }}>O</label>
              </div>

              <button type="button" className="login-button">
                Usar un código de inicio de sesión
              </button>
            </div>

            <p>
              <a href="#" className="forgot-password">
                ¿Olvidaste tu contraseña?
              </a>
            </p>

            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Recordarme</label>
            </div>
          </div>
        </form>

        <p>
          ¿Primera vez en Eduzine? <a href="#"> Suscríbete ya.</a>
        </p>

        <small>
          Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.{' '}
          <a href="#">Más info.</a>
        </small>
      </div>
    </div>
  );
};

export default Login;
