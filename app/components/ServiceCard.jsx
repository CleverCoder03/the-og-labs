"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ServiceCard({title, desc, bgCoverImg, serviceImg}) {
  return (
    <CardContainer className="h-full xl:w-[22dvw]">
      <div className="absolute size-full">
        <Image src={bgCoverImg} alt="service-1-bg" className="rounded-xl" fill />
      </div>
      <CardBody
        className="relative group/card w-[18rem] h-full sm:w-[20rem] p-3 py-6 md:p-6">
        <CardItem
          translateZ="50"
          className="text-base font-poppins-regular text-white">
          {title}
        </CardItem>
        
        <CardItem translateZ="100" className="size-full mt-5">
          <div className="relative h-40 w-full opacity-70 my-15 mix-blend-plus-lighter">
            <Image src={serviceImg} className="object-contain" alt="spring" fill />
          </div>
        </CardItem>
        <div className="flex flex-col justify-center items-start">
          <CardItem
            translateZ={20}
            className=" text-lg w-[80%] font-normal">
            {desc}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
