import React, { useState } from "react";
import { toast } from "react-toastify";
import { X } from "lucide-react";

function Signup({ onClose, toggleModals }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    fetch(baseUrl + "account/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.success(data.message);
          onClose();
          toggleModals && toggleModals();
        } else {
          toast.error(data.error || "Signup failed: ");
        }
      })
      .catch(() => toast.error("Signup failed. Try again."));
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div
        className="bg-white/10 backdrop-blur-md border border-purple-400 rounded-2xl shadow-xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 text-center">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-x-4">
  <input
    type="text"
    name="first_name"
    placeholder="First Name"
    onChange={handleChange}
    value={formData.first_name}
    required
    className="w-1/2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
  />
  <input
    type="text"
    name="last_name"
    placeholder="Last Name"
    onChange={handleChange}
    value={formData.last_name}
    required
    className="w-1/2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
  />
</div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            required
            className="w-full bg-white/10 backdrop-blur-sm border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full bg-white/10 backdrop-blur-sm border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
            className="w-full bg-white/10 backdrop-blur-sm border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirm_password}
            required
            className="w-full bg-white/10 backdrop-blur-sm border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center mt-6 text-gray-300">
          Already have an account?{" "}
          <button
            className="text-purple-400 font-semibold underline hover:text-purple-300 transition-colors duration-200"
            onClick={() => {
              onClose();
              toggleModals && toggleModals();
            }}
            type="button"
          >
            Login
          </button>
        </p>

        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold transition-colors duration-200"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <X />
        </button>
      </div>
    </div>
  );
}

export default Signup;
