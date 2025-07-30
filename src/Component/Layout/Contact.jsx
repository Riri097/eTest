import React, { useState } from "react";
import { toast } from "react-toastify";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* All Content in One Section */}
      <div className="relative py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-slate-900 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-lg inline-block">
              Contact Us
            </h1>
            <div className="backdrop-blur-sm rounded-lg p-3 max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-slate-700">
                Have questions? We'd love to hear from you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 order-2 lg:order-1">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg inline-block">
                Get In Touch
              </h2>
              
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600 text-sm sm:text-base" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Email</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">vedantaq@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600 text-sm sm:text-base" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Phone</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">+977 9876543210</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-600 text-sm sm:text-base" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Address</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-5 sm:p-6 border border-white/20 order-1 lg:order-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-5">Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
