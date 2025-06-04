import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroSliderOne from "../../assets/images/hero/hero-1.jpg";
import HeroSliderTwo from "../../assets/images/hero/hero-2.jpg";

const Hero = () => {
  return (
    <section className="section-1">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <div
              className="content"
              style={{ backgroundImage: `url(${HeroSliderOne})` }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="content"
              style={{ backgroundImage: `url(${HeroSliderTwo})` }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </section>
  )
}

export default Hero