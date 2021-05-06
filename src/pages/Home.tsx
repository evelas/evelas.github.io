import React from 'react';
import Cards from '../components/Cards';
import classnames from 'classnames';

import { tabs, projectList, projectListCompany } from './data/Arrays';

const Home: React.FC = () => {
  
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const handleTab = (index: number) => {
    setActiveTab(index);
  };
  
  return (
    <div className="main__wrapper">
      <div className="home">
        <div className="main__info">
          <h1>Portfolio</h1>
        </div>
        <div className="home__tabs">
          {tabs.map((item, index) => {
            return (
              <div key={index}>
                <h2
                  className={classnames({
                    active: item.id === activeTab,
                  })}
                  onClick={() => {
                    handleTab(item.id);
                  }}>
                  {item.name}
                </h2>
                <span>/</span>
              </div>
            );
          })}
        </div>
      </div>
      {activeTab === 0 && <Cards {...projectList} />}
      {activeTab === 1 && <Cards {...projectListCompany} />}
    </div>
  );
};

export default Home as React.FC;
