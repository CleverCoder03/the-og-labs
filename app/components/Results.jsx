const Results = ({headline, metrics}) => {
  return (
    <div className="mt-10 md:mt-15 lg:mt-18">
      <div className="px-6 md:px-10 lg:px-15">
        <h1 className="text-4xl md:text-5xl font-poppins-medium">{headline}</h1>
      </div>
      <div className="px-6 md:px-10 lg:px-15 mt-10">
        {metrics.map((data)=>(
            <div key={data.id} className="border-t-2 font-poppins-medium py-5 lg:py-8 xl:py-10 lg:text-lg">{data.description}</div>
        ))}
      </div>
    </div>
  );
};

export default Results;
