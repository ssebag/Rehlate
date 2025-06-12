import React from 'react'
import './Plans.css';
import Title from './../Title/Title'
import { useTranslation } from 'react-i18next';
import {PlansData} from './PlansData'
import Card from './../PlansCards/Card'

export default function Plans() {
    const { t, i18n } = useTranslation('plans_section');

  return (
    <div className={`plans container-responsive ${i18n.language ==='ar' ? 'arabic' : ''} `}>
     <Title  titleParagraph= {t('title.Paraghraph')} titleMain={t('title.MainTitle')} />
     <div className="cards-plans flex-bw">
        {
          PlansData.map((el, idx) =>{
            return (
             <Card
              background={el.background}
              price={t(`${el.price}`)}
              plan={t(`${el.plan}`)}
              description={t(`${el.description}`)}
              tickets={t(`${el.tickets}`)} 
              booking={t(`${el.booking}`)}
              PersonalizedSupport={t(`${el.PersonalizedSupport}`)}/> 
            );
          })
         }
     </div>
    </div>
  )
}
