import React from 'react';
import './videoquimica.css';
import videoSrc from '../../assets/La Quimica y la vida.mp4';


const VideoQuimica = () => {
  return (
    <div className="video-page">
      <video className="video-player" src={videoSrc} controls autoPlay />
    </div>
  );
};

export default VideoQuimica;
