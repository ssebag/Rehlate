import React, {useState, useContext} from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css'
import NavItems from './NavItems'

export default function Navbar() {

  // ===================== Handle Functions for Toggle ================
  const [toggleNav, setToggleNav] = useState(false);
  function handleToggleNav() {
    setToggleNav(!toggleNav);
  }
 
  
 //============================== Lang =======================
 const lang= localStorage.getItem("language");
 const { t, i18n } = useTranslation();
 const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); 
  };

  return (
    <>
      <nav>
         <div className={`flex-bw ${i18n.language ==='ar' ? 'arabic' : ''} `}>
          <h5 className="text-uppercase text-light logo">رحلاتي </h5> 
            <NavItems navClass={"nav-items pointer flex-al-c"}/>
             <div className="lang lang-web">
              {
                  lang == 'ar' ? (
                    <button onClick={()=> changeLanguage('en')}>En</button>
                  ):(
                    <button onClick={()=> changeLanguage('ar')}>Ar</button>
                  )
               }
            </div>
            <button className='menu_icon' onClick={handleToggleNav}><i className="fa-solid fa-bars"></i> </button>
         </div>
         {toggleNav ? (
          <div className="nav-mobile flex-col">
                <p className="close-icon pointer"
                    onClick={handleToggleNav}>
                    X
                </p>
                <div className='lang lang-mobile'>
                {
                    lang == 'ar' ? (
                        <button onClick={()=> changeLanguage('en')}>En</button>
                    ):(
                        <a onClick={()=> changeLanguage('ar')}>Ar</a>
                    )
                }
                </div>  
            <NavItems navClass={"nav-mobile-items flex-al-c flex-col"} />
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}
