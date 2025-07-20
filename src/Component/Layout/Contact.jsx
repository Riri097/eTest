import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../UI/Button";  // Adjust the import path as per your project structure

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-[#344C3D] px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="mb-7 text-center text-[#6B7B68]">
        Have questions or feedback? We’d love to hear from you! Fill out the form below or email us directly at{" "}
        <a href="mailto:support@vedantaq.com" className="text-[#344C3D] font-semibold underline">
          support@vedantaq.com
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="bg-[#BFCFBB] p-9 w-xl mx-auto rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="font-semibold mb-1 block">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full bg-gray-50 rounded-md border border-[#344C3D] px-4 py-2 text-[#344C3D] focus:outline-none focus:ring-2 focus:ring-[#344C3D]"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="font-semibold mb-1 block">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full bg-gray-50 rounded-md border border-[#344C3D] px-4 py-2 text-[#344C3D] focus:outline-none focus:ring-2 focus:ring-[#344C3D]"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="font-semibold mb-1 block">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows={5}
            className="w-full bg-gray-50 rounded-md border border-[#344C3D] px-4 py-2 text-[#344C3D] focus:outline-none focus:ring-2 focus:ring-[#344C3D]"
            required
          ></textarea>
        </label>

      <div className="flex justify-center">
        <Button type="submit" variant="primary" className="">
            Send Message
            </Button>
            </div>
      </form>
    </div>
  );
};

export default Contact;
