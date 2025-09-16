import Image from "next/image";

const ClientCard = ({ src }) => {
  return (
    <div className="mt-20">
      <div className="relative w-[18rem] h-[5rem] mx-3">
        <Image src={src} alt={src} className="object-contain" fill />
      </div>
    </div>
  );
};

export default ClientCard;
