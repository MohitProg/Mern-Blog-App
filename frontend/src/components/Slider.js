import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import Blogitem from './Blogitem';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Slider = () => {
  return (
<>

<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>     <Blogitem /></SwiperSlide>
        <SwiperSlide>     <Blogitem /></SwiperSlide>
        <SwiperSlide>     <Blogitem /></SwiperSlide>
        <SwiperSlide>     <Blogitem /></SwiperSlide>
        <SwiperSlide>     <Blogitem /></SwiperSlide>
        <SwiperSlide>     <Blogitem /></SwiperSlide>
        <SwiperSlide>     <Blogitem /></SwiperSlide>
        <SwiperSlide>     <Blogitem /></SwiperSlide>
        <SwiperSlide>     <Blogitem /></SwiperSlide>
      </Swiper>


</>
  )
}

export default Slider