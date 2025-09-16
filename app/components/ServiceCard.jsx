"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ServiceCard({title, desc, bgCoverImg, serviceImg}) {
  return (
    <CardContainer className="h-full">
      <div className="absolute size-full">
        <Image src={bgCoverImg} alt="service-1-bg" className="rounded-xl" fill />
      </div>
      <CardBody
        className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-[22rem] p-6">
        <CardItem
          translateZ="50"
          className="text-base font-poppins-regular text-white">
          {title}
        </CardItem>
        
        <CardItem translateZ="100" className="size-full mt-4">
          <div className="h-55 bg-white w-fit opacity-70 my-15 mix-blend-plus-lighter">
            <Image src={serviceImg} className="object-contain" alt="spring" fill />
          </div>
        </CardItem>
        <div className="flex flex-col justify-center items-start">
          <CardItem
            translateZ={20}
            className=" text-lg w-[80%] font-normal dark:text-white">
            {desc}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
