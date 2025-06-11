import React from 'react'
import './Card.css'
import { useTranslation } from 'react-i18next';
export default function Card({price, plan, description,tickets, booking, PersonalizedSupport, background}) {
  
  const { t, i18n } = useTranslation();
  return (
    <div className={`card card-plans ${background}`} >
        <div className="card-body flex-col">
            <h1 className="card-title">{price}</h1>
            <h3>{plan}</h3>
            <p className="card-text">{description}</p>
            <hr />
            <ul>
                <li><i class="fa-solid fa-check bg-light text-dark"></i> {tickets}</li>
                <li><i class="fa-solid fa-check bg-light text-dark"></i> {booking}</li>
                <li><i class="fa-solid fa-check bg-light text-dark"></i> {PersonalizedSupport}</li>
            </ul>
            <button className='flex-center'> <i class="fa-solid fa-chevron-left bg-light text-dark"></i>{t('Plans.BookingNow')}</button>
        </div>
    </div>
  )
}
