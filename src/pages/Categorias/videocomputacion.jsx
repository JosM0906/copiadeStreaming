import React from 'react';
import './videoquimica.css';
import videoSrc from '../../assets/programacion.mp4';


const VideoComputacion = () => {
  return (
    <div className="video-page">
      <video className="video-player" src={videoSrc} controls autoPlay />
    </div>
  );
};

export default VideoComputacion;
