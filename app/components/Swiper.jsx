"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { services } from "@/lib";
import { ServiceCard } from "./ServiceCard";

export default function Slider() {
  return (
    <div className="!bg-[#0E0652] mt-20 lg:mt-30 text-white py-10 md:py-15 lg:py-18">
        <h2 className="text-center md:text-xl">Our Services</h2>
      <h1 className="text-center text-3xl md:text-5xl mt-5 font-poppins-medium">Our Core Services</h1>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className=""
      >
        {services.map(({ id, title, desc, bgCoverImg, serviceImg }) => (
          <SwiperSlide className="!bg-[#0E0652] px-10">
            <ServiceCard
              key={id}
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
