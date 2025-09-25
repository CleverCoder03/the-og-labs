import Marquee from "react-fast-marquee";
import ClientCard from "./ClientCard";

// const brandImages = [
//   { id: 1, src: "/brand-1.png" },
//   { id: 2, src: "/brand-2.png" },
//   { id: 3, src: "/brand-3.png" },
//   { id: 4, src: "/brand-4.png" },
//   { id: 5, src: "/brand-5.png" },
// ];

const Clients = () => {
  return (
    <div className="bg-white py-10">
      <div className="mt-10 px-6">
        <h2 className="text-center md:text-xl">Our Client's</h2>
        <p className="text-3xl md:text-5xl font-poppins-medium text-center mt-5">
          The Brand That Trusts Us
        </p>
      </div>
        <Marquee autoFill speed={75}>
            <ClientCard src={"/brand-1.png"} />
            <ClientCard src={"/brand-2.png"} />
            <ClientCard src={"/brand-3.png"} />
            <ClientCard src={"/brand-4.png"} />
            <ClientCard src={"/brand-5.png"} />
        </Marquee>
    </div>
  )
}

export default Clients