"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Make sure to import pagination styles if you use it

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { services } from "@/lib";
import { ServiceCard } from "./ServiceCard";

export default function Slider() {
  return (
    <div className="!bg-[#0E0652] mt-20 lg:mt-30 text-white py-10 md:py-15 lg:py-18">
      <h2 className="text-center md:text-xl">Our Services</h2>
      <h1 className="text-center text-3xl md:text-5xl mt-5 font-poppins-medium">
        Our Core Services
      </h1>
      <Swiper
        // Enable infinite scrolling
        loop={true}
        
        // Default slides per view for mobile
        slidesPerView={1}
        // spaceBetween={20} // Optional: adds space between slides

        // Responsive breakpoints
        breakpoints={{
          // When window width is >= 1024px (Tailwind's lg breakpoint)
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
        
        navigation={true}
        modules={[Navigation, Pagination]}
        className="lg:!flex lg:!justify-center lg:!items-center lg:!w-[70rem] !h-full"
      >
        {services.map(({ id, title, desc, bgCoverImg, serviceImg }) => (
          <SwiperSlide key={id} className="!bg-[#0E0652] py-10 ">
            <ServiceCard
              title={title}
              desc={desc}
              bgCoverImg={bgCoverImg}
              serviceImg={serviceImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}