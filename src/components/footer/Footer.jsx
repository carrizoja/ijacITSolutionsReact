import React from 'react'
import './footer.scss';
import {FaFacebook} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import logoIjacNeg from '../../assets/logo_ijac_neg.png'
import { motion } from "framer-motion"; 



const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'><img src={logoIjacNeg} alt='logo'></img></a>

      <ul className='permalinks'>
        <li><a href="#home" className='footer__link'>Inicio</a></li>
        <li><a href="#about" className='footer__link'>Nosotros</a></li>
        <li><a href="#services" className='footer__link'>Servicios</a></li>
        <li><a href="#contact"className='footer__link'>Contacto</a></li>
      </ul>

      <div className='footer__socials'>
        <motion.a href="https://www.facebook.com/ijacsolucionesinformaticas" target='_blank' rel='noreferrer' whileHover={{
          rotate: 360,
          scale: 1.2,
          transition: { type: "spring", stiffness: 900, damping: 20 }
        }}><FaFacebook className='footer__icon' /></motion.a>
        <motion.a href="https://www.instagram.com/ijacsi/" target='_blank' rel='noreferrer' whileHover={{
          rotate: 360,
          scale: 1.2,
          transition: { type: "spring", stiffness: 900, damping: 20 }
        }} ><GrInstagram className='footer__icon' /></motion.a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; José Carrizo. All rights reserved 2023 </small>
      </div>

    </footer>
  )
}

export default Footer