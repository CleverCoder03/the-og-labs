// app/components/Challenge.jsx
import React from 'react';

const Challenge = ({ headline, points }) => {
  if (!points || points.length === 0) {
    return null;
  }

  return (
    <div className='mt-10 md:mt-15 lg:mt-18 px-6 md:px-10 lg:px-15'>
      <h1 className='text-4xl md:text-5xl font-poppins-medium'>{headline}</h1>
      <div className='mt-10 h-full flex gap-5 lg:gap-2 flex-col lg:flex-row justify-between align-middle items-stretch'>
        {points.map((point) => (
          <div key={point.id} className='w-full border p-5 lg:p-10 flex items-center justify-center text-center font-playfair-medium flex-grow'>
            {point.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenge;