import React from 'react'
import client from '../../images/client-1.webp'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import './style/feedback.css'

const Feedback = _ => {
  return (
    <section className='feedback py-8'>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <p className='text-center mb-6 text-slate-500'>“Originally, creative and with an innate understanding of their customer’s need. The team at Miles are always a pleasure to work with. Recommended.”</p>
            <img src={client} alt="client" />
            <h3>Bobby Hanesto</h3>
            <h4>Director of <span className='text-amber-400'>Inivisionapp</span></h4>
        </SwiperSlide>
        <SwiperSlide>
            <p className='text-center mb-6 text-slate-500'>“Originally, creative and with an innate understanding of their customer’s need. The team at Miles are always a pleasure to work with. Recommended.”</p>
            <img src={client} alt="client" />
            <h3>Bobby Hanesto</h3>
            <h4>Director of <span className='text-amber-400'>Inivisionapp</span></h4>
        </SwiperSlide>
        <SwiperSlide>
            <p className='text-center mb-6 text-slate-500'>“Originally, creative and with an innate understanding of their customer’s need. The team at Miles are always a pleasure to work with. Recommended.”</p>
            <img src={client} alt="client" />
            <h3>Bobby Hanesto</h3>
            <h4>Director of <span className='text-amber-400'>Inivisionapp</span></h4>
        </SwiperSlide>
        <SwiperSlide>
            <p className='text-center mb-6 text-slate-500'>“Originally, creative and with an innate understanding of their customer’s need. The team at Miles are always a pleasure to work with. Recommended.”</p>
            <img src={client} alt="client" />
            <h3>Bobby Hanesto</h3>
            <h4>Director of <span className='text-amber-400'>Inivisionapp</span></h4>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Feedback