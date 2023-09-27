import React, {useState} from "react";
import "./contact.scss";
import {IoLogoWhatsapp} from 'react-icons/io5'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import 'animate.css'
import { FaLocationArrow } from 'react-icons/fa';



const Contact = () => {
  const form = useRef();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const allInputsFilled = inputs.name && inputs.email && inputs.message;

  const notify = () => toast("¡Mensaje enviado!");
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i88901i', 'template_lv3layu', form.current, '0JUVgk1Zkp-6oMNDc')

    e.target.reset();
  };

  return (
    <section className="contact__container__section" id="contact">
      <h5 className="contact__subtitle">Tu consulta no es molestia </h5>
      <h2 className="contact__title">Contacto</h2>

      <div className="container contact__container">

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" value={inputs.name} onChange={handleInputChange} placeholder="Tu nombre completo" required />
          <input type="email" name="email" value={inputs.email} onChange={handleInputChange} placeholder="Tu email" required />
          <textarea name="message" rows="10" value={inputs.message} onChange={handleInputChange} placeholder="Tu mensaje" required />
          <motion.button onClick={notify} type="submit" className="btn btn-primary"  whileHover={{
                scale: 1.03,
                transition: { type: "spring" }
              }}
              whileTap={{
                scale: 0.9,
                transition: { type: "spring" }
              }}></motion.button>      
        </form>
        <article className="container__location">
            <FaLocationArrow className="container__location__icon"/>
            <p>Almagro</p>
            <p>Ciudad Autónoma de Buenos Aires</p>
            <p>Argentina</p>
        </article>
        {allInputsFilled && <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />}
        <div className="container__whatsApp">
          <motion.a href="https://api.whatsapp.com/send?phone=5491130862409&text=Hola, ¿cómo estás? Tengo una consulta para hacerte." className="float animate__animated animate__bounceInDown" rel="noreferrer" target="_blank" whileHover={{
            rotate: 360,
            scale: 1.2,
            transition: { type: "spring", stiffness: 900, damping: 20 }
          }}>
            <IoLogoWhatsapp className="contact__whatsApp_logo " />
          </motion.a>
        </div> 
      </div>
    </section>
  );
};

export default Contact;
