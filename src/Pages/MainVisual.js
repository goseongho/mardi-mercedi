import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const MainVisual = () => {
  return (
    <div className='MainVisual'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={
            process.env.PUBLIC_URL + '/Images/MainVisual.png'
          } alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={
            process.env.PUBLIC_URL + '/Images/MainVisual1.png'
          } alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={
            process.env.PUBLIC_URL + '/Images/MainVisual2.png'
          } alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={
            process.env.PUBLIC_URL + '/Images/MainVisual3.png'
          } alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={
            process.env.PUBLIC_URL + '/Images/MainVisual4.png'
          } alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MainVisual