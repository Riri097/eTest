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

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    fetch("http://127.0.0.1:8000/account/signup", {
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
      className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white border-2 border-[#0B1F3A] rounded-2xl shadow-xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-3 text-center">
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
    className="w-1/2 border-2 border-[#E7F2F8] rounded-md px-4 py-3 bg-white text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
  />
  <input
    type="text"
    name="last_name"
    placeholder="Last Name"
    onChange={handleChange}
    value={formData.last_name}
    required
    className="w-1/2 border-2 border-[#E7F2F8] rounded-md px-4 py-3 bg-white text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
  />
</div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            required
            className="w-full border-2 border-[#E7F2F8] rounded-md px-4 py-3 bg-white text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full border-2 border-[#E7F2F8] rounded-md px-4 py-3 bg-white text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
            className="w-full border-2 border-[#E7F2F8] rounded-md px-4 py-3 bg-white text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirm_password}
            required
            className="w-full border-2 border-[#E7F2F8] rounded-md px-4 py-3 bg-white text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />

          <button
            type="submit"
            className="w-20 bg-[#0B1F3A] hover:bg-[#081830] text-white font-semibold py-3 rounded-lg shadow transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-[#0B1F3A]">
          Already have an account?{" "}
          <button
            className="text-[#0B1F3A] font-semibold underline hover:text-[#081830]"
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
          className="absolute top-4 right-4 text-[#0B1F3A] hover:text-[#081830] text-xl font-bold"
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
