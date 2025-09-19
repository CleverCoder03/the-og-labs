const ContactCard = () => {
  return (
    <div className="bg-[#0E0652] text-white py-10 lg:py-15 xl:py-18 px-6 md:px-10 lg:px-15">
        <div className="flex flex-col lg:flex-row gap-15">
            <div className="lg:w-1/2">
                <h2 className="font-poppins-regular">Contact Info</h2>
                <h1 className="font-poppins-medium text-4xl mt-2 sm:text-5xl sm:w-[50vw] lg:w-full lg:font-poppins-regular lg:text-[6vw] lg:leading-[1.1]">Your success is our priority</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-15 lg:w-1/2">
                <div className="lg:flex lg:flex-col lg:w-[22vw] lg:justify-end">
                    <h2 className="font-poppins-semibold">Email</h2>
                    <h3>help@theoglabs.com</h3>
                    <p className="text-white/80 mt-4 lg:mt-8">Assistance hours: <br /> Monday - Friday 6 am to 8 pm EST</p>
                </div>
                <div className="lg:flex lg:flex-col lg:w-[22vw] lg:justify-end">
                    <h2 className="font-poppins-semibold">Number</h2>
                    <h3>(808) 998-34256</h3>
                    <p className="text-white/80 mt-4 lg:mt-8">Assistance hours: <br /> Monday - Friday 6 am to 8 pm EST</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactCard