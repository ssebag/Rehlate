import React from 'react'
import Title from "./../Title/Title"
import Card from '../Cards/Card'
import './Services.css'
import { useTranslation } from 'react-i18next'
import {ServicesData} from './ServicesData'

export default function Services() {
    const { t, i18n } = useTranslation();
  return (
    <div className='services'>
      <Title  titleParagraph= {t('mainTitle.Services.Paraghraph')} titleMain={t('mainTitle.Services.MainTitle')} />
    <div className="cards-services flex-bw">
        {
          ServicesData.map((el, idx) =>{
            return (
             <Card image={el.image} title={el.title} description={el.description}/> 
            );
          })
         }
    </div>
    </div>
  )
}
