import React from 'react'
import './footer.scss'
import {FaFacebook} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Jose</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/carrizoja" target='_blank' rel='noreferrer'><FaFacebook/></a>
        <a href="https://www.instagram.com/carrizo.jose/" target='_blank' rel='noreferrer'><GrInstagram/></a>
        <a href="https://www.linkedin.com/in/jose-carrizo-dev/" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/carrizoja/carrizoja" target='_blank' rel='noreferrer'><FaGithub/></a>

      </div>

      <div className='footer__copyright'>
        <small>&copy; José Carrizo. All rights reserved </small>
      </div>

    </footer>
  )
}

export default Footer