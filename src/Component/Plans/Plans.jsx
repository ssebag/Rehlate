import React from 'react'
import './Plans.css';
import Title from './../Title/Title'
import { useTranslation } from 'react-i18next';
import {PlansData} from './PlansData'
import Card from './../PlansCards/Card'

export default function Plans() {
    const { t, i18n } = useTranslation();

  return (
    <div className='plans'>
     <Title  titleParagraph= {t('mainTitle.Plans.Paraghraph')} titleMain={t('mainTitle.Plans.MainTitle')} />
     <div className="cards-plans flex-bw">
        {
          PlansData.map((el, idx) =>{
            return (
             <Card background={el.background} price={el.price} plan={el.plan} description={el.description} tickets={el.tickets} booking={el.booking} PersonalizedSupport={el.PersonalizedSupport}/> 
            );
          })
         }
     </div>
    </div>
  )
}
