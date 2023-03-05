import React from 'react'
import './nav.scss'
import { useState } from 'react'
import ijacLogo from '../../assets/logo_ijac_neg.png'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (

    <nav>
      <div className='logo__container'>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><img className='ijacLogo' src={ijacLogo} alt="" /></a>
      </div>
      <div className='itemsNav__container'>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Servicios</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>Nosotros</a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> Contacto</a>
      </div>
     
    </nav>

  )
}

export default Nav