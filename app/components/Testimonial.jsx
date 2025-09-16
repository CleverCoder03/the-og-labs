"use client";
import { clients } from "@/lib";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalClients = clients.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalClients) % totalClients;

    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffSet) => {
    return clients[
      (currentIndex + indexOffSet + totalClients) % totalClients
    ];
  };

  const currentClient = getCocktailAt(0);
  return (
    <div className="relative mt-10">
      <h2 className="text-center">Testimonials</h2>
      <h1 className="text-center text-4xl font-poppins-medium mt-5">Trusted by Industry Leaders</h1>
      <div className="bg-black text-white mt-10 px-6 py-20">
        <div className="flex flex-col gap-15">
          <div className="relative size-10">
            <Image src="/d-quote.png" alt="double-quote" fill />
          </div>
          <div className="font-poppins-medium text-center text-2xl">
            {currentClient.mesg}
          </div>
          <div className="mt-15 flex items-center justify-between">
            <div className="border p-2 cursor-pointer" onClick={()=>goToSlide(currentIndex - 1)}>
              <MoveLeft />
            </div>
            <div className="flex gap-5 align-middle items-center">
              <div className="relative size-10 hidden md:block">
                <Image src={currentClient.image} alt="client" fill />
              </div>
              <div>
                <h3 className="font-playfair-regular text-center md:text-left">
                  {currentClient.name}
                </h3>
                <p className="text-white/60 text-center md:text-left">{currentClient.desg}</p>
              </div>
            </div>
            <div className="border p-2 cursor-pointer" onClick={()=>goToSlide(currentIndex + 1)}>
              <MoveRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
