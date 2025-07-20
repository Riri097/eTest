import React, { useState } from "react";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login({ onClose, toggleModals, setIsAuthenticated }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const navigate = useNavigate();
  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/account/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access) {
          localStorage.setItem("token", data.access);
          localStorage.setItem("username", formData.username);
          setIsAuthenticated(true);
          toast.success("Login successful!");
          navigate("/dashboard");
          onClose();
        } else if (data.error) {
          toast.error(data.error);
        } else {
          toast.error("Unexpected response");
        }
      })
      .catch(() => toast.error("Login failed"));
  };

  return (
    <div
      className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white border-2 border-[#344C3D] rounded-xl shadow-xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-[#344C3D] mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            required
            className="w-full border-2 border-[#BFCFBB] rounded-md px-4 py-3 text-[#344C3D] focus:outline-none focus:ring-2 focus:ring-[#344C3D]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
            className="w-full border-2 border-[#BFCFBB] rounded-md px-4 py-3 text-[#344C3D] focus:outline-none focus:ring-2 focus:ring-[#344C3D]"
          />

            <button
            type="submit"
            className="w-20  bg-[#344C3D] hover:bg-[#2a3b2d] text-white font-semibold py-3 rounded-lg shadow transition-colors duration-300"
          >
            Login
          </button>
          
        </form>

        <p className="text-center mt-6 text-[#344C3D]/70">
          Don't have an account?{" "}
          <button
            className="text-[#344C3D] font-semibold underline hover:text-[#2a3b2d]"
            onClick={() => {
              onClose();
              toggleModals && toggleModals();
            }}
            type="button"
            
          >
            Sign Up
          </button>
        </p>

        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
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

export default Login;
