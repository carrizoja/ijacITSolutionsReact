import React from "react";
import "./about.scss";
import Counter from "../../helpers/counter/Counter";
import data from "../../data/dataCounter.json"

const About = () => {
  return (
    <section className="about__container__section" id="about">

      <h2 className="about__title">Nosotros</h2>
      <div className="container about__container">
        <div className="about__me" data-aos="flip-right"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine">
          <div className="about__me-image">
            <img src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1678140653/img/technology_about_us_hgvqfb.jpg" alt="technology" />
          </div>
        </div>
        <div className="about__content" data-aos="flip-left"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine">
          <div className="about__cards">
            <div>
              {data.counts.map(count => <Counter key={count.id} data={count} />)}
            </div>
          </div>
          <p className="about__description">
            Somos un grupo integral de profesionales apasionados por el mundo IT y abocados a la resolución de incidencias que el mundo digital propone
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
