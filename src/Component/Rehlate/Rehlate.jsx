import React from 'react'
import './Rehlate.css'
import SwiperImg from './../Swiper/Swiperr'
import Title from '../Title/Title'
import { useTranslation } from 'react-i18next';

export default function Rehlate() {
    const { t, i18n } = useTranslation('rehlate_section');
  return (
    <div className={`rehlate ${i18n.language ==='ar' ? 'arabic' : ''} `}>
        <Title  titleParagraph= {t('title.Paraghraph')} titleMain={t('title.MainTitle')} />
        <SwiperImg />
    </div>
  )
}
