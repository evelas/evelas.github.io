import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
// import { useLocalStorage } from '../hooks/useLocalStorage';
import { useHistory } from 'react-router';

const headerList: { id: number; to: string; name: string }[] = [
  {
    id: 0,
    to: '/',
    name: 'Works',
  },
  {
    id: 1,
    to: '/resume',
    name: 'Resume',
  },
  {
    id: 2,
    to: '/contacts',
    name: 'Contacts',
  },
  {
    id: 3,
    to: '/gratitude',
    name: 'Gratitude',
  },
];

const Header: React.FC = () => {

  const history = useHistory();
  const {pathname} = history.location;
  const setMenuIndex = headerList.findIndex((el) => el.to.includes(pathname));
  
  const [activeId, setActiveId] = React.useState(setMenuIndex);
  const handleClick = (id: number) => {
    setActiveId(id);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__list">
            {headerList.map((item, index) => {
              return (
                <li className="header__item" key={`${item.name}_${index}`}>
                  <span className="header__line">/</span>
                  <Link
                    to={item.to}
                    className={classnames('header__link', {
                      header__link_active: item.id === activeId,
                    })}
                    onClick={() => handleClick(item.id)}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
