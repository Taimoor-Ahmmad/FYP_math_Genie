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
      // Here you can implement your email sending logic using your preferred method
      // For example:
      // await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(emailData) });
      alert("Email sent successfully");
      setFormData({ name: "", email: "", message: "" }); // Clear the form
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
    <div id="contactus" className="relative flex bg-362147">
      <div className="absolute top-0 right-0 m-4">
        <div
          className="w-20 h-20 bg-purple-500 rounded-full"
          style={{ animation: "pulse 2s infinite" }}
        ></div>
      </div>

      <div className="w-1/3 ml-20 h-screen flex flex-col justify-center items-center bg-362147">
        <Image
          src="/asserts/square.png"
          alt="Math Genie"
          layout="responsive"
          width={30}
          height={30}
          className="w-full h-full object-contain lg:w-full xl:w-full"
        />
        <span className="text-white mt-12 text-5xl">Feeling Stuck?</span>
        <span className="text-white text-5xl pt-2">Don't Worry</span>
      </div>
      <div className="w-1/2 h-screen bg-362147 flex justify-center items-center">
        <form
          className="w-2/3 p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl mb-4 text-white flex justify-center">
            Contact Us
          </h2>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
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
              className="block text-white text-sm font-bold mb-2"
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
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full h-[200px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
