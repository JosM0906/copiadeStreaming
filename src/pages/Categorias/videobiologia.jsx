import React from 'react';
import './videoquimica.css';
import videoSrc from '../../assets/Biologia en la vida cotidiana.mp4';


const videobiologia = () => {
  return (
    <div className="video-page">
      <video className="video-player" src={videoSrc} controls autoPlay />
    </div>
  );
};

export default videobiologia;
