import React, { useState } from "react";
import { motion } from "framer-motion"
import "./navFM.scss";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ijacLogoPos from '../../assets/logo_ijac_pos.png'


const variants = {
  open: { opacity: 1, x: 0, },
  closed: { opacity: 0, x: "-100%" }
}
const NavFM = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <motion.nav
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="inner-nav">
          <ul>
            <motion.li whileHover={{ backgroundColor: 'rgb(95,30,88)' }} whileTap={{ scale: 0.9 }}>
              <a href="#home">Home</a>
            </motion.li>
            <motion.li whileHover={{ backgroundColor: 'rgb(95,30,88)' }} whileTap={{ scale: 0.9 }}>
              <a href="#services">Servicios</a>
            </motion.li>
            <motion.li whileHover={{ backgroundColor: 'rgb(95,30,88)' }} whileTap={{ scale: 0.9 }}>
              <a href="#aboutUs">Nosotros</a>
            </motion.li>
            <motion.li whileHover={{ backgroundColor: 'rgb(95,30,88)' }} whileTap={{ scale: 0.9 }}>
              <a href="#contact">Contacto</a>
            </motion.li>
            <motion.div className="logoContainer">
            <img className="ijacLogoPos" src={ijacLogoPos} alt="logo ijac" />
            </motion.div>

          </ul>
        </motion.div>

      </motion.nav>
      <motion.button
        className="toggle"
        onClick={() => setShow(show => !show)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {show ? <CloseIcon /> : <MenuIcon />}

      </motion.button>
    </>

  )
}

export default NavFM