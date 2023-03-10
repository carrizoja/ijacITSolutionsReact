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
          <div className='container__carousel__img carousel__img__mother'>
          </div>   
        </SwiperSlide>
        <SwiperSlide>
          <div className='container__carousel__img carousel__img__mother2'>
          </div>   
        </SwiperSlide>
       
        
      </Swiper>
    </>
  )
}

export default Carousel