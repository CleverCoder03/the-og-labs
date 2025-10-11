import Image from "next/image";
import Link from "next/link";
import React from "react";

const InsightCard = ({ id, src, title, date }) => {
  return (
    <div className="insightCards my-10  ">
      <Link href={`/insight/${id}`}>
        <div className={`relative w-full image-container border border-gray-200 lg:shadow-2xl`}>
          <Image src={src} alt="insight" className="object-contain lg:object-cover" fill />
        </div>
        <div className="mt-4 lg:flex lg:flex-col-reverse">
          <h1 className="font-playfair-semibold text-lg lg:text-white lg:mt-5">
            {title}
          </h1>
          <p className="font-poppins-regular text-sm text-black/60 lg:text-white/60 lg:text-end">
            {date}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default InsightCard;
