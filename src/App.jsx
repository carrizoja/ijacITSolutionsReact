import React from 'react';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import NavFM from './components/NavFM/NavFM';


function App() {
  return (
    <> 
      <NavFM/>
      <Header /> 
      <Contact />
      <Footer /> 

    </>

  );
}

export default App;
