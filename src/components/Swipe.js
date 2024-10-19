import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import eventsData from "./Events/eventsData";
import "./Swipe.css"

const FlowerSlider = () => {
  
const [activeIndex,setactiveIndex]=useState(0)
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 1000,  
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        onSlideChange={(swiper)=>setactiveIndex(swiper.activeIndex)}
        className="mySwiper"
      >
        {eventsData.map((flower, index) => (
          <SwiperSlide key={index} className="rounded-lg">
            <img src={flower.image} alt={flower.modaldescription} className="w-full h-full" />
            <div className="text-center mt-4 text-lg text-white">
              {flower.description}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8">
        <div className="text-center text-white bg-gray-800 p4 rounded-lg border-teal-200 border-4 font-sans">
          <h3 className="text-lg font-bold">{eventsData[activeIndex].title}</h3>
          <p className="text-sm">{eventsData[activeIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlowerSlider;
