import React from 'react';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import NavFM from './components/NavFM/NavFM';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import IjacServices from './components/ijacServices/IjacServices';


function App() {
  return (
    <> 
      <NavFM/>
      <Header />
      <IjacServices/>
      <About/>
      <Testimonials/> 
      <Contact />
      <Footer /> 

    </>

  );
}

export default App;
