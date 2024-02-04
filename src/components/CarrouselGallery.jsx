import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../public/styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export function CarrouselGallery() {
  return (
    <> 
    <div
  class="flex bg-transparent items-center justify-center mb-20 mx-auto bg-black"
>
    <div class="w-20 mx-1 border-b-2 border-gray-300"></div>
      <h3 class="fade fade-up text-4xl px-3 flex font-md text-main-red font-bold">
        Galleria
      </h3>
    <div class="w-20 mx-1 border-b-2 border-gray-300"></div>
    </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="../../public/img/ch-3.webp" alt="img" />
        </SwiperSlide>
        <SwiperSlide> <img src="../../public/img/ch-3.webp" alt="img" />
        </SwiperSlide>
        <SwiperSlide> <img src="../../public/img/ch-3.webp" alt="img" />
        </SwiperSlide>
        <SwiperSlide> <img src="../../public/img/ch-3.webp" alt="img" />
        </SwiperSlide>
        <SwiperSlide> <img src="../../public/img/ch-3.webp" alt="img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}