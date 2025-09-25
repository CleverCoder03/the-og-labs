const processes = [
  {
    id: "01.",
    name: "AI + Creativity",
    desc: "Leverage artificial intelligence to spark fresh ideas and transform them into impactful solutions.",
  },
  {
    id: "02.",
    name: "Smart Strategy",
    desc: "Plan with precision using data-driven insights that align with your business goals.",
  },
  {
    id: "03.",
    name: "Automated Execution",
    desc: "Streamline workflows and let automation handle repetitive tasks for maximum efficiency.",
  },
  {
    id: "04.",
    name: "Scalable Growth",
    desc: "Unlock sustainable expansion with systems designed to grow alongside your business.",
  },
];

const Process = () => {
  return (
    <div className="bg-[#0E0652] mt-10 md:mt-15 lg:mt-18 py-5 text-white md:py-15 lg:py-18 md:px-10 lg:px-15">
      <div className="mt-10 lg:mt-0">
        <h2 className="text-center md:text-xl">The OG Lab's Process</h2>
        <p className="text-3xl md:text-5xl font-poppins-medium text-center mt-5">
          Our Formula for Success
        </p>
      </div>
      <div className="mt-10 md:mt-15 lg:mt-18 pb-10 lg:pb-0 flex flex-col gap-6 lg:gap-10 xl:gap-15 lg:flex-row lg:justify-between lg:w-full px-6 lg:px-0">
        {processes.map((process) => (
          <div key={process.id} className="bg-[#0C0070] p-4 flex flex-col justify-between gap-8 lg:gap-30 xl:gap-40 lg:w-1/4">
            <div className="font-poppins-semibold">
              <h1>{process.id}</h1>
              <h1>{process.name}</h1>
            </div>
            <p className="font-poppins-light text-sm">
              {process.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
