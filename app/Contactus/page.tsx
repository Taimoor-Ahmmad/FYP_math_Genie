"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contactus: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = async () => {
    try {
      const emailData = {
        email: formData.email,
        subject: `Message from ${formData.name}`,
        message: formData.message,
      };
      alert("Email sent successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <div
      id="contactus"
      className="relative flex flex-col md:flex-row bg-362147 min-h-screen"
    >
      <div className="absolute top-0 right-0 m-4">
        <div
          className="w-20 h-20 bg-purple-500 rounded-full"
          style={{ animation: "pulse 2s infinite" }}
        ></div>
      </div>

      <div className="md:w-1/3 w-full flex flex-col justify-center items-center bg-362147 p-4 md:p-0">
        <Image
          src="/asserts/square.png"
          alt="Math Genie"
          layout="responsive"
          width={30}
          height={30}
          className="hidden md:block w-full h-full object-contain lg:w-full xl:w-full"
        />
        <span className="text-white mt-12 text-2xl md:text-5xl">
          Feeling Stuck?
        </span>
        <span className="text-white text-2xl md:text-5xl pt-2">
          Don't Worry
        </span>
      </div>
      <div className="md:w-1/2 w-full flex justify-center items-center bg-362147 p-4 md:p-0">
        <form
          className="w-full md:w-2/3 p-6 rounded-lg shadow-md bg-white"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl md:text-4xl mb-4 text-black flex justify-center">
            Contact Us
          </h2>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full h-32 md:h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
