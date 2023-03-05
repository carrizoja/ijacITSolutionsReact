import React from "react";
import "./contact.scss";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {IoLogoWhatsapp} from 'react-icons/io5'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i88901i', 'template_lv3layu', form.current, '0JUVgk1Zkp-6oMNDc')

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Tu consulta no es molestia </h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jose.carrizo@ijac.com.ar</h5>
            <a href="mailto:jose.carrizo@ijac.com.ar" target='_blank' rel="noreferrer">Send us a email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Facebook Messenger</h4>
            <h5>iJac IT Solutions</h5>
            <a href="https://m.me/ijacsolucionesinformaticas" target='_blank' rel="noreferrer">Send me a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+5491130284520</h5>
            <a href="https://wa.me/+5491130284520/?text=Hey!, José. How are you? I want to contact you." target='_blank' rel="noreferrer">Send me a message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Tu nombre completo" required/>
          <input type="email" name="email" placeholder="Tu email" required/>
          <textarea name="message" rows="10" placeholder="Tu mensaje" required />
          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
        </form>
      </div>    
    </section>
  );
};

export default Contact;
