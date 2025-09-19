import Image from "next/image";
import React from "react";

const ImageCard = ({src}) => {
  return (
    <div>
      <div className="mt-10 py-2 md:py-4">
        <div className="relative w-[15rem] h-[20rem] lg:w-[26vw] lg:h-[35vw] mx-2">
          <Image src={src} alt={src} className="object-cover" fill />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
