import { blogs } from "@/lib";
import Image from "next/image";
import Link from "next/link";

const Insight = () => {
  return (
    <div className="relative">
      <div className="bg-white mt-20 md:mt-25 lg:mt-28">
        <h2 className="text-center md:text-xl">The OG Labs Blogs</h2>
        <p className="text-3xl md:text-5xl font-poppins-medium text-center mt-5">
          The Insight Hub
        </p>
      </div>

      <div
        id="insightCards"
        className="px-6 pb-10 md:px-10 lg:px-15 lg:flex lg:justify-between lg:gap-4 xl:gap-7"
      >
        {blogs.map((blog) => (
          <div key={blog.id} className="insightCards my-10 lg:w-1/3">
            <Link href={`/insight/${blog.id}`}>
              <div className={`relative w-full image-container`}>
                <Image
                  src={blog.src}
                  alt="insight"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="mt-4 lg:flex lg:flex-col-reverse">
                <h1 className="font-playfair-semibold text-lg lg:text-white lg:mt-5">
                  {blog.title}
                </h1>
                <p className="font-poppins-regular text-sm text-black/60 lg:text-white/60 lg:text-end">
                  {blog.date}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden lg:block lg:absolute lg:bottom-0 bg-black h-1/2 z-[-1] w-full"></div>
    </div>
  );
};

export default Insight;
