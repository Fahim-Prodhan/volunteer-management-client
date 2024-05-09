import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../../../assets/images/img1.png";
import banner2 from "../../../assets/images/img.png";
import banner3 from "../../../assets/images/img2.png";

function Banner() {
  return (
    <div>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="w-[20px]">
            <img src={banner3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px]">
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px]">
            <img src={banner1} alt="" />
          </SwiperSlide>
        </Swiper>
          <div className="absolute text-center top-[45%] md:top-[40%] lg:top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] ">
            <h1 className="font-rancho font-bold text-white text-center text-[16px] md:text-[24px] lg:text-[48px]">One Of the Finest Collection is Here</h1>
            <p className="text-white text-xs md:text-xl">Explore the World Best Collection</p>
            <button className="rounded-md lg:text-3xl mt-1 md:text-xl bg-[#92929297] text-[#F7D060] border-2 px-4 py-1 md:px-6 md:py-2 md:mt-6 duration-500 hover:text-[#FF6D60] hover:border-blue-500">Learn More</button>
          </div>
      </div>
    </div>
  );
}

export default Banner;
