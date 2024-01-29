import SellCard from './SellCard.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../public/styles.css'

// import required modules
import { Autoplay } from 'swiper/modules';

export function CarrouselGallery() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={60}
        modules={[ Autoplay]}
        className=""
      >
        <SwiperSlide><SellCard /></SwiperSlide>
        <SwiperSlide><SellCard /></SwiperSlide>
        <SwiperSlide><SellCard /></SwiperSlide>
        <SwiperSlide><SellCard /></SwiperSlide>
        <SwiperSlide><SellCard /></SwiperSlide>
        <SwiperSlide><SellCard /></SwiperSlide>
      </Swiper>
    </>
  );
}
