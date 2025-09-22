import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Marketing",
    src: "/insight-1.png",
    date: "August 28, 2025 • 6 min read",
    h: "30vw",
  },
  {
    id: 2,
    title: "5 Proven Strategies to Boost Brand Engagement",
    src: "/insight-2.png",
    date: "September 2, 2025 • 4 min read",
    h: "20vw",
  },
  {
    id: 3,
    title: "Why Storytelling is the Heart of Modern Advertising",
    src: "/insight-3.png",
    date: "September 5, 2025 • 5 min read",
    h: "24vw",
  },
];

const Insight = () => {
  return (
    <div className="relative">
      <div className="bg-white mt-20 md:mt-25 lg:mt-28">
        <h2 className="text-center md:text-xl">The OG Labs Blogs</h2>
        <p className="text-4xl md:text-5xl font-poppins-medium text-center mt-5">
          The Insight Hub
        </p>
      </div>

      <div className="px-6 pb-10 md:px-10 lg:px-15 lg:flex lg:justify-between lg:gap-4 xl:gap-7">
        {blogs.map((blog) => (
          <div key={blog.id} className="my-10 lg:w-1/3">
            <div
              className="relative w-full h-[15rem] md:h-[22rem]"
              style={{ "--lg-height": blog.h }}
            >
              <Image
                src={blog.src}
                alt="insight"
                className="object-cover h-[var(--lg-height)]"
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
          </div>
        ))}
      </div>
      <div className="hidden lg:block lg:absolute lg:bottom-0 bg-black h-1/2 z-[-1] w-full"></div>
    </div>
  );
};

export default Insight;