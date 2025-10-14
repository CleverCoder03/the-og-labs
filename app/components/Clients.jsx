import Marquee from "react-fast-marquee";
import ClientCard from "./ClientCard";

const Clients = () => {
  return (
    <div className="bg-white py-10">
      <div className="mt-10 px-6">
        {/* <h2 className="text-center md:text-xl">Our Client's</h2> */}
        <p className="text-3xl md:text-5xl font-playfair-semibold text-center mt-5">
          Brands That Trusts Us
        </p>
      </div>
        <Marquee autoFill speed={75} className="space-x-10">
            <ClientCard src={"/brands/amazon.png"} />
            <ClientCard src={"/brands/bing.png"} />
            <ClientCard src={"/brands/doubleverify.png"} />
            <ClientCard src={"/brands/google-ad.webp"} />
            <ClientCard src={"/brands/google-analytics.png"} />
            <ClientCard src={"/brands/google-campaign.png"} />
            <ClientCard src={"/brands/google-display.webp"} />
            <ClientCard src={"/brands/integrat-ad.png"} />
            <ClientCard src={"/brands/looker.png"} />
            <ClientCard src={"/brands/meta.png"} />
            <ClientCard src={"/brands/semrush.png"} />
            <ClientCard src={"/brands/the-trade-desk.png"} />
        </Marquee>
    </div>
  )
}

export default Clients