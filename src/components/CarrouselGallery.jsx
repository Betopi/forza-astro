import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../public/styles.css";
import { Autoplay } from "swiper/modules";

export function CarrouselGallery() {
  return (
    <>
      <Swiper slidesPerView={"auto"} spaceBetween={60} className="">
        <SwiperSlide>
          <img src="../../public/img/ch-2.webp" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/img/ch-2.webp" alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/img/ch-2.webp" alt="Image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/img/ch-2.webp" alt="Image 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/img/ch-2.webp" alt="Image 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/img/ch-2.webp" alt="Image 6" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
