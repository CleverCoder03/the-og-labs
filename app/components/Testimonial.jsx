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
    return clients[(currentIndex + indexOffSet + totalClients) % totalClients];
  };

  const currentClient = getCocktailAt(0);
  return (
    <div className="relative mt-10 md:mt-15 lg:mt-18">
      <h2 className="text-center md:text-xl">Testimonials</h2>
      <h1 className="text-center text-4xl md:text-5xl font-poppins-medium mt-5">
        Trusted by Industry Leaders
      </h1>
      <div className="bg-black text-white mt-10 md:mt-15 lg:mt-18 px-6 py-20 md:py-25 lg:py-30 md:px-10 lg:px-15">
        <div className="flex flex-col gap-15 lg:gap-10">
          <div className="relative size-10 lg:size-15">
            <Image src="/d-quote.png" alt="double-quote" fill />
          </div>

          <div className="font-poppins-medium text-center text-2xl lg:text-start lg:text-4xl lg:leading-[1.4] xl:text-5xl xl:leading-[1.4]">
            {currentClient.mesg}
          </div>

          <div className="mt-15 flex items-center justify-between lg:mt-0">
            <div
              className="border p-2 cursor-pointer lg:hidden"
              onClick={() => goToSlide(currentIndex - 1)}
            >
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
                <p className="text-white/60 text-center md:text-left">
                  {currentClient.desg}
                </p>
              </div>
            </div>

            <div
              className="border p-2 cursor-pointer lg:hidden"
              onClick={() => goToSlide(currentIndex + 1)}
            >
              <MoveRight />
            </div>
          </div>

          <div className="hidden lg:flex gap-2 w-full justify-between align-middle items-center lg:mt-10 xl:mt-15">
            {clients.map((client, index) => {
              const isActive = index === currentIndex;

              return (
                <button
                  key={client.id}
                  className={`w-full border py-5 ${
                    isActive
                      ? "bg-white"
                      : "text-white/50 border-white/50"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <h1
                    className={`text-lg font-playfair-regular ${
                      isActive ? "text-black" : "text-white"
                    }`}
                  >
                    {client.name}
                  </h1>
                  <p
                    className={`text-xs font-poppins-regular mt-1 ${
                      isActive ? "text-black" : "text-white/50"
                    }`}
                  >
                    {client.desg}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
