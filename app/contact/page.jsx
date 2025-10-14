"use client"
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LandingBanner from "../components/LandingBanner";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import Image from "next/image";
import Button from "../components/Button";
import PhoneNumberInput from "../components/PhoneNumberInput";

// Import EmailJS and React Hot Toast
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const icons = [
  {
    id: 1,
    imgSrc: "/facebook.png",
    href: "",
  },
  {
    id: 2,
    imgSrc: "/instagram.png",
    href: "",
  },
  {
    id: 3,
    imgSrc: "/twitter.png",
    href: "",
  },
];

const ContactPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes for standard inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle changes for the custom PhoneNumberInput component
  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };
  
  // Form validation function
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      toast.error("Please fill in all fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    // These IDs are from your EmailJS account
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
    };

    // The promise that will be handled by react-hot-toast
    const sendEmailPromise = emailjs.send(serviceID, templateID, templateParams, publicKey);

    toast.promise(
      sendEmailPromise,
      {
        loading: 'Sending your message...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      }
    );

    sendEmailPromise
      .then(() => {
        // Reset form only on successful submission
        setFormData({ name: "", phone: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        // Error is already handled by toast.promise, but you can log it here
      })
      .finally(() => {
        // Re-enable the button regardless of outcome
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      {/* Use the Toaster component from react-hot-toast */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          // Define default options
          duration: 5000,
        }}
      />

      <Navbar />
      <LandingBanner title={"Contact Us"} />
      <div className="py-10 lg:py-15 xl:py-18 px-6 md:px-10 lg:px-15 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="font-poppins-regular text-center md:text-left">Get Started</h2>
          <div className="text-3xl mt-2 sm:text-4xl md:text-5xl font-playfair-regular lg:text-[6vw] lg:leading-[1.1] text-center md:text-left">
            <h1>Get in touch with us.</h1>
            <h1>We're here to assist you.</h1>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:gap-3">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="border rounded-[50%] flex justify-center items-center p-2"
            >
              <div className="relative size-2.5 xl:size-3">
                <Image src={icon.imgSrc} alt={icon.imgSrc} fill />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 lg:py-15 xl:py-18 px-6 md:px-10 lg:px-15">
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-10 lg:w-full lg:justify-center lg:items-center">
            <div className="lg:w-1/2">
              <div className="border-b pb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="outline-none border-none w-full"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <PhoneNumberInput 
              value={formData.phone}
              onChange={handlePhoneChange}
            />
            <div className="lg:w-1/2">
              <div className="border-b pb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="outline-none border-none w-full"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="border-b pb-5">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="outline-none border-none w-full resize-none h-20"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="mt-10 lg:w-1/2 text-center">
              <Button type={"submit"} tag={isSubmitting ? "Sending..." : "Leave us a message"} className={"bg-black text-white"} disabled={isSubmitting}/>
            </div>
          </div>
        </form>
      </div>
      <ContactCard />
      <Footer />
    </div>
  );
};

export default ContactPage;