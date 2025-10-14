const Results = ({ headline, metrics }) => {
  return (
    <div className="my-10 md:my-15 lg:my-18">
      <div className="px-6 md:px-10 lg:px-15">
        <h1 className="text-4xl md:text-5xl font-playfair-semibold">{headline}</h1>
      </div>
      <div className="px-6 md:px-10 lg:px-15 mt-10">
        {metrics.map((data) => (
          <div
            key={data.id}
            className="border-t font-poppins-medium py-5 lg:py-8 xl:py-10 lg:text-lg"
          >
            {" "}
            <strong>{data.title}{" "}</strong>
            {data.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
