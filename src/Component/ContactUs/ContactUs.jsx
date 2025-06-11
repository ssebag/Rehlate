import React from 'react'
import './contactUs.css'
import Title from './../Title/Title'
import Form from './../Form/Form'
import { useTranslation } from 'react-i18next';
import {ContactData} from './ContactData'
import Card from '../Cards/Card'

export default function ContactUs() {
    const { t, i18n } = useTranslation();
  return (
    <div className='contactUs'>
      <Title  titleParagraph= {t('mainTitle.Contact.Paraghraph')} titleMain={t('mainTitle.Contact.MainTitle')} />
      <div className='div-form'>
        <Form />
        <div className="cards-contact flex-col">
        {
          ContactData.map((el, idx) =>{
            return (
             <Card image={el.image} title={el.title} description={el.description}/> 
            );
          })
         }
       </div>
      </div>

    </div>
  )
}
