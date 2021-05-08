import React from 'react';

const Resume: React.FC = () => {
  
  return (
    <div className="main__wrapper">
      <div className="resume">
        <div className="main__info">
          <h1>Resume</h1>
        </div>
        <iframe className="resume__frame" title="resume" src="https://volspb.ru/play/Shuvalov.pdf" ></iframe>
      </div>
    </div>
  );
};

export default Resume;
