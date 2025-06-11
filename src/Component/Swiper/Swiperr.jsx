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
      spaceBetween={1}
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay:500,
        disabledInteraction: false
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
