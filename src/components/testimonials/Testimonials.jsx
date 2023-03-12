import React from "react";
import "./testimonials.scss";
import { useState, useEffect } from 'react'
import {getFirestore,collection, getDocs} from 'firebase/firestore' 
import { HashLoader } from "react-spinners";

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get fetch projects from firebase
    const db = getFirestore();
    const itemsCollection = collection(db, "testimonials");
    getDocs(itemsCollection).then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents.');
      }
      setTestimonials(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      setLoading(false);
    });
  }, []);

  return (
    <>
    {
      loading ? 
      (
        <HashLoader color="#4cd636" className='spinner' animation="border" role="status"/>
      )
      :


    <section className="testimonials__section" id="testimonials">
      <h5 className="testimonials__title">Lo que los clientes dicen de nosotros</h5>
      <h2>Testimonios</h2>

            <Swiper className="container testimonials__container"
              data-aos="flip-left"
              // install Swiper modules
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}>

        {
          testimonials.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial.id} className="testimonial">
              <div className="client__avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <h5 className="client__name">{testimonial.name}</h5>
              <h6 className="client__company">{testimonial.company}</h6>
              <small className="client__review">
                {testimonial.review}
              </small>
            </SwiperSlide>
            )
          })
        }      
      </Swiper>
    </section>

    }
    </>
  );
};

export default Testimonials;
