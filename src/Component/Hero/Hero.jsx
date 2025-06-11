import React, { useTransition } from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, i18n } = useTranslation('hero');
  return (
    <div className='hero'>
      <div className='hero-description text-light flex-col flex-al-c'>
        <h1>{t('HeroTitle')}</h1>
        <p>{t('HeroParagraph')}</p>
        <button className='bg-warning flex-bw text-dark'>
          <i className="fa-solid fa-chevron-left bg-light"></i>
          {t('HeroButton')}
        </button>
        <p>{t('HeroScroll')}</p>
      </div>
    </div>
  )
}
