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
    <div className="bg-[#0E0652] mt-10 py-10 text-white">
      <div className="mt-10">
        <h2 className="text-center">The OG Lab's Process</h2>
        <p className="text-4xl font-poppins-medium text-center mt-5">
          Our Formula for Success
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-6 px-6">
        {processes.map((process) => (
          <div key={process.id} className="bg-[#0C0070] p-4 flex flex-col gap-8">
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
