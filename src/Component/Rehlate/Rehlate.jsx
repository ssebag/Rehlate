import React from 'react'
import './Rehlate.css'
import SwiperImg from './../Swiper/Swiperr'
import Title from '../Title/Title'
import { useTranslation } from 'react-i18next';

export default function Rehlate() {
    const { t, i18n } = useTranslation();
  return (
    <div className="rehlate">
     <div className={`${i18n.language ==='ar' ? 'arabic' : ''} `}>  
        <Title  titleParagraph= {t('mainTitle.Rehlate.Paraghraph')} titleMain={t('mainTitle.Rehlate.MainTitle')} />
      </div>     
        <SwiperImg />
     
    </div>
  )
}
