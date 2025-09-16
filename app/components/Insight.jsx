import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Marketing",
    src: "/insight-1.png",
    date: "August 28, 2025 • 6 min read",
  },
  {
    id: 2,
    title: "The Future of AI in Marketing",
    src: "/insight-2.png",
    date: "August 28, 2025 • 6 min read",
  },
  {
    id: 3,
    title: "The Future of AI in Marketing",
    src: "/insight-3.png",
    date: "August 28, 2025 • 6 min read",
  },
];

const Insight = () => {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-center">The OG Labs Blogs</h2>
        <p className="text-4xl font-poppins-medium text-center mt-5">
          The Insight Hub
        </p>
      </div>

      <div className="px-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="my-10">
            <div className="relative w-full h-[15rem]">
              <Image
                src={blog.src}
                alt="insight"
                className="object-cover"
                fill
              />
            </div>
            <div className="mt-4">
              <h1 className="font-playfair-semibold text-lg">{blog.title}</h1>
              <p className="font-poppins-regular text-sm text-black/60">
                {blog.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Insight;
