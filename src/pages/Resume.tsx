import React from 'react';

const Resume: React.FC = () => {
  
  return (
    <div className="main__wrapper">
      <div className="resume">
        <div className="main__info">
          <h1>Resume</h1>
        </div>
        <object data="https://volspb.ru/play/83315.pdf" type="application/pdf">
          <embed src="https://volspb.ru/play/83315.pdf" type="application/pdf" />
        </object>
      </div>
    </div>
  );
};

export default Resume;
