import React, { useTransition } from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <div className='hero'>
      <div className='hero-description text-light flex-col flex-al-c'>
        <h1>{t('Hero.HeroTitle')}</h1>
        <p>{t('Hero.HeroParagraph')}</p>
        <button className='bg-warning flex-bw text-dark'>
          <i class="fa-solid fa-chevron-left bg-light"></i>
          {t('Hero.HeroButton')}
        </button>
        <p>{t('Hero.HeroScroll')}</p>
      </div>
    </div>
  )
}
