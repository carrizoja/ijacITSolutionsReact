import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <>
       <header id="home">
      <div className='container header__container'>
        <div className="header__img">
          <img className="ijacPhoto" src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1678406758/svgs/wave_2_mmuiyo.svg" alt="ijac" />
          <div>
            <h1 className="header__titleH1">Ijac</h1>
            <h2 className="header__titleH2">IT Solutions</h2>
            <p className="header__subtitle">Hacemos ingeniería para un mundo más inteligente</p>            
          </div>
          <div className="container__CTA">
            <button>
              <a className="btn-primary btn" href="#contact">Ponete en contacto</a>
            </button>       
          </div>
        </div> 
      </div>
    </header>
    </>
   
  );
}

export default Header