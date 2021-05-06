import React from 'react';
import diploma from '../assets/img/thanks/Diploma_conference.jpg';
import leagueA from '../assets/img/thanks/League_HTML_Academy.jpg';
import worldCup from '../assets/img/thanks/World_Cup.jpg';

const Gratitude: React.FC = () => {
  return (
    <div className="main__wrapper">
      <div className="gratitude">
        <div className="main__info">
          <h1>Gratitude</h1>
        </div>
        <div className="gratitude__grid">
          <img src={leagueA} alt="ligaA" />
          <img className="gratitude__grid_column" src={worldCup} alt="world cup" />
          <img src={diploma} alt="diploma" />
        </div>
      </div>
    </div>
  );
};

export default Gratitude;
