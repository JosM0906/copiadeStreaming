import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/Play_icon.png'
import info_icon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='Hero'>
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className='hero-caption'>
          <img src={hero_title} alt="" className='caption-img' />
          <p>Un curso paso a paso si deseas comenzar en el mundo de la Programación Web.
            En este curso aprenderás 10 Lenguajes y Tecnologías Web:
            HTML, CSS, SASS, Workflows, JavaScript, Fetch, PHP, POO - MVC, MySQL - SQL y API's</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Reproducir</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />Más info</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
