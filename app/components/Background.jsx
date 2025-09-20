import Image from 'next/image'
import React from 'react'

const Background = ({headline, para, image}) => {
  return (
    <div className='mt-10 md:mt-15 lg:mt-18'>
        <div className='px-6 md:px-10 lg:px-15'>
            <h1 className='text-4xl md:text-5xl font-poppins-medium'>{headline}</h1>
            <p className='md:text-lg font-poppins-regular mt-5'>{para}</p>
        </div>
        <div className='relative px-6 md:px-10 lg:px-15 h-[45vw] mt-10 pb-5'>
            <div className='relative w-full h-full'>
                <Image src={image} alt="CaseStudy Background" className='object-cover' fill />
            </div>
            <div className='absolute bg-black h-[80%] w-full left-0 bottom-0 -z-10'></div>
        </div>
    </div>
  )
}

export default Background