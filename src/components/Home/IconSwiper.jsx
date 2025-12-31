import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import icon3 from "../../assets/img/icon3.png";

import IconCard from "./IconCard";

export default function IconSwiper() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}

      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}

      breakpoints={{
        768: {
          slidesPerView: 3,
          allowTouchMove: false,
          autoplay: false, // ⛔ MATI di desktop
        },
      }}
    >
      <SwiperSlide>
        <IconCard
          img={icon1}
          title="Fresh Flowers"
          desc="Blooming with love — every stem is hand-picked."
        />
      </SwiperSlide>

      <SwiperSlide>
        <IconCard
          img={icon2}
          title="Professional Florists"
          desc="Crafted with heart — timeless floral pieces."
        />
      </SwiperSlide>

      <SwiperSlide>
        <IconCard
          img={icon3}
          title="Custom Orders"
          desc="Tell us your idea — we create the flowers just for you."
        />
      </SwiperSlide>
    </Swiper>
  );
}
