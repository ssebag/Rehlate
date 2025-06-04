import React from 'react';
import { Items } from './items'
import { HashLink } from "react-router-hash-link";
import { useTranslation } from 'react-i18next';

export default function NavItems({ navClass }) {
  const { t, i18n } = useTranslation();
    const links = Items.map((el, idx) => {
        return (
          <li key={idx}>
          <HashLink smooth to={`/${el.path}`}>{t(`Navbar.${el.title}`)}</HashLink>           
          </li>
        );
      });
  return (
    <>
       <ul className={navClass}>
          {links}
       </ul>
    </>
  )
}
