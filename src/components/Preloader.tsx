import React from 'react';
import preloader from '../assets/img/preloader.gif';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} alt="prelaoder" />
    </div>
  );
};

export default Preloader as React.FC;
