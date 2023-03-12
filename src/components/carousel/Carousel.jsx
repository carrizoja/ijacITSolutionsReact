import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.scss";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container__carousel"
      >
        <SwiperSlide >
          <div className='container__carousel__img carousel__img__abstract'>
            <h3>"Innovación es lo que distingue a un líder de los demás."</h3>
            <p>Steve Jobs</p>
          </div>   
        </SwiperSlide>
        <SwiperSlide>
          <div className='container__carousel__img carousel__img__abstract2'>
            <h3>"La verdadera medida del éxito no es si tienes un problema, sino cómo lo solucionas."</h3>
            <p>Linus Torvalds</p>
          </div>   
        </SwiperSlide>
        <SwiperSlide>
          <div className='container__carousel__img carousel__img__abstract3'>
          <h3>"Si no puedes hacer que funcione, entonces no es un buen negocio."</h3>
            <p>Bill Gates</p>
          </div>   
        </SwiperSlide>   
        
      </Swiper>
    </>
  )
}

export default Carousel