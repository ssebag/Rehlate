import React from 'react'
import Title from "./../Title/Title"
import Card from '../Cards/Card'
import './Services.css'
import { useTranslation } from 'react-i18next'
import {ServicesData} from './ServicesData'

export default function Services() {
    const { t, i18n } = useTranslation('services_section');
  return (
    <div className='services'>
      <Title  titleParagraph= {t('title.Paraghraph')} titleMain={t('title.MainTitle')} />
    <div className="cards-services flex-bw">
        {
          ServicesData.map((el, idx) =>{
            return (
             <Card image={el.image} title={t(`${el.title}`)} description={t(`${el.description}`)}/> 
            );
          })
         }
    </div>
    </div>
  )
}
