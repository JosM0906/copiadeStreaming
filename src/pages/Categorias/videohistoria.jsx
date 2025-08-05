import React from 'react';
import './videoquimica.css';
import videoSrc from '../../assets/Historia en la vida cotidiana.mp4';


const VideoHistoria = () => {
  return (
    <div className="video-page">
      <video className="video-player" src={videoSrc} controls autoPlay />
    </div>
  );
};

export default VideoHistoria;
