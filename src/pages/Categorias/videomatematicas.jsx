import React from 'react';
import './videoquimica.css';
import videoSrc from '../../assets/MatematicasEnElMundo.mp4';


const videomatematicas = () => {
  return (
    <div className="video-page">
      <video className="video-player" src={videoSrc} controls autoPlay />
    </div>
  );
};

export default videomatematicas;
