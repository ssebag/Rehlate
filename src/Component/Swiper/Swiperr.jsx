import React from 'react'
import './Swiper.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardSwiper from '../CardSwiper/CardSwiper';
import {SwiperData} from './SwiperData'
import { useTranslation } from 'react-i18next';

export default function Swiperr() {

  const { t, i18n } = useTranslation('rehlate_section');

  return (
    <Swiper
    modules={[Autoplay, Navigation, Pagination, A11y]}
      loop={true}
      autoplay={{
        delay:500,
        disabledInteraction: false
      }}
      breakpoints={{
        200: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
        500: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        }}
      
      speed={10000}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       {
          SwiperData.map((el, idx) =>{
            return (
              <SwiperSlide>
                 <CardSwiper image={el.image} title={t(`${el.title}`)} description={t(`${el.description}`)}/> 
             </SwiperSlide>);
          })
         }
       
         
       
       
    </Swiper>
  )
}
