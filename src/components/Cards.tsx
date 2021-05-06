import React from 'react';
import { CardType } from '../types/types';
import { map } from 'lodash';
import classnames from 'classnames';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const Cards: React.FC<Array<CardType>> = (props) => {
  
  const [activeId, setActiveId] = React.useState<number>(0);
  const handleOpen = (id: number) => {
    setActiveId(id);
  };
  const handleClose = () => {
    setActiveId(0);
  };

  return (
    <div className="cards">
      {map(props, function (item, index) {
        return (
          <div className="cards__item" key={index}>
            {index !== activeId ? (
              <div
                className={classnames('cards__content', {
                  cards__content_tablet: item.mobile === 'tablet',
                  cards__content_desktop: item.mobile === 'desktop',
                })}>
                <div className="cards__topbar">
                  <span className="cards__name">{item.name}</span>
                </div>
                <div className="cards__about">
                  <Swiper navigation slidesPerView={1} spaceBetween={20}>
                    {map(item.img, function (data, index) {
                      return <SwiperSlide key={index}>{data.content}</SwiperSlide>;
                    })}
                  </Swiper>
                </div>
                <div className="cards__bottombar cards__hover" onClick={() => handleOpen(index)}></div>
              </div>
            ) : (
              <div
                className={classnames('cards__content', {
                  cards__content_tablet: item.mobile === 'tablet',
                  cards__content_desktop: item.mobile === 'desktop',
                })}>
                <div className="cards__topbar">
                  <span className="cards__name">{item.name}</span>
                </div>
                <div className="cards__info">
                  <div className="cards__close">
                    <span onClick={handleClose}>x</span>
                  </div>
                  <p>
                    <b>Repo: </b>
                    <a className="cards__link" href={item.info.github} target="_blank" rel="noreferrer">{item.info.github}</a>
                  </p>
                  <p>
                    <b>Stack: </b>
                    {item.info.stack}
                  </p>
                  <p>
                    <b>About: </b>
                    {item.info.text}
                  </p>
                </div>
                <div className="cards__bottombar cards__hover" onClick={handleClose}></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
