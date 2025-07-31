import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import TitleCards from '../../components/TitleCards/TitleCards';
import bannerImg from '../../assets/bannerQuimica.jpg'; 

const Quimica = () => {
  return (
    <div className="categoria-page">
      <HeroBanner
        background={bannerImg}
        title="Química en tu mundo"
        description="Descubre cómo la química está presente en tu día a día."
      />
      <TitleCards title="Videos destacados de Química" category="quimica" />
    </div>
  );
};

export default Quimica;
