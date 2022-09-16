import React from 'react'
import taxi from '../../images/taxi.webp'
import { Parallax } from 'react-scroll-parallax';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination,Autoplay } from "swiper";
import './style/carousel.css'

const Carousel = _ => {
  return (
    <section className='carousell'>
        <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="page-1 flex justify-center items-center p-4">
                <Parallax translateY={["-100px", "200px"]}>
                    <div className="content">
                        <h1 className='text-5xl font-bold'>Earn. Connect.<br/> Contribute to Society</h1>
                        <p className='my-8'>Partner with us to drive your own livelihood and more.</p>
                        <button>
                            <span className="shadow"/>
                            <span className="edge"/>
                            <span className="front text"> Get Started</span>
                        </button>
                    </div>
                </Parallax>
                <Parallax translateY={["0px", "300px"]}>
                    <img src={taxi} alt="taxi" />
                </Parallax>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="page-1 flex justify-center items-center p-4">
                <Parallax translateY={["-100px", "200px"]}>
                    <div className="content">
                        <h1 className='text-5xl font-bold'>Earn. Connect.<br/> Contribute to Society</h1>
                        <p className='my-8'>Partner with us to drive your own livelihood and more.</p>
                        <button>
                            <span className="shadow"/>
                            <span className="edge"/>
                            <span className="front text"> Get Started</span>
                        </button>
                    </div>
                </Parallax>
                <Parallax translateY={["0px", "300px"]}>
                    <img src={taxi} alt="taxi" />
                </Parallax>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="page-1 flex justify-center items-center p-4">
                <Parallax translateY={["-100px", "200px"]}>
                    <div className="content">
                        <h1 className='text-5xl font-bold'>Earn. Connect.<br/> Contribute to Society</h1>
                        <p className='my-8'>Partner with us to drive your own livelihood and more.</p>
                        <button>
                            <span className="shadow"/>
                            <span className="edge"/>
                            <span className="front text"> Get Started</span>
                        </button>
                    </div>
                </Parallax>
                <Parallax translateY={["0px", "300px"]}>
                    <img src={taxi} alt="taxi" />
                </Parallax>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Carousel