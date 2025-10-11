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
import InsightCard from "./InsightCard";
import { blogs } from "@/lib/blogs";

export default function InsightSlider() {
  return (
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
        // 1280: {
        //     slidesPerView: 3,
        //   spaceBetween: 0,
        // }
      }}
      id="impactSlider"
      navigation={true}
      modules={[Navigation, Pagination]}
      className="lg:!flex lg:!justify-center lg:!items-center !h-full lg:!w-[60rem] xl:!w-[70rem] lg:!px-4 xl:!px-10"
    >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className="px-15 lg:px-10">
            <InsightCard
              id={blog.id}
              src={blog.src}
              title={blog.title}
              date={blog.date}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
