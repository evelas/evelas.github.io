import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGrav,
  faVk,
  faTelegram,
  faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contacts: React.FC = () => {
  
  return (
    <div className="main__wrapper main__wrapper_contacts">
      <div className="contacts">
        <div className="main__info">
          <h1>Contacts</h1>
        </div>
        <a href="https://career.habr.com/evelas" target="_blank" rel="noreferrer">
          <div className="contacts__item">
            <div className="contacts__icon">
              <FontAwesomeIcon icon={faGrav} color="white" size="6x" />
            </div>
            <span>Career habr</span>
          </div>
        </a>
        <a href="https://twitter.com/MrEvelas" target="_blank" rel="noreferrer">
          <div className="contacts__item">
            <div className="contacts__icon">
              <FontAwesomeIcon icon={faTwitter} color="white" size="6x" />
            </div>
            <span>@MrEvelas</span>
          </div>
        </a>
        <a href="https://vk.com/evelas" target="_blank" rel="noreferrer">
          <div className="contacts__item">
            <div className="contacts__icon">
              <FontAwesomeIcon icon={faVk} color="white" size="6x" />
            </div>
            <span>evelas</span>
          </div>
        </a>
        <a href="https://t.me/evelas" target="_blank" rel="noreferrer">
          <div className="contacts__item">
            <div className="contacts__icon">
              <FontAwesomeIcon icon={faTelegram} color="white" size="6x" />
            </div>
            <span>@evelas</span>
          </div>
        </a>
        <a href="mailto:n.n.shuvalov@yandex.ru">
          <div className="contacts__item">
            <div className="contacts__icon">
              <FontAwesomeIcon icon={faGoogle} color="white" size="6x" />
            </div>
            <span>evelas94@gmail.com</span>
          </div>
        </a>
        <a href="tel+:+7951660819">
          <div className="contacts__item">
            <div className="contacts__icon">
              <FontAwesomeIcon icon={faPhone} color="white" size="4x" />
            </div>
            <span>+7 (951) - 666 - 08 - 19</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
