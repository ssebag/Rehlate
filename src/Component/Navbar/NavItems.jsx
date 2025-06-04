import React from 'react';
import { Items } from './items'
import { HashLink } from "react-router-hash-link";

export default function NavItems({ navClass }) {
    const links = Items.map((el, idx) => {
        return (
          <li key={idx}>
          <HashLink smooth to={`/${el.path}`}>{el.title}</HashLink>           
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
