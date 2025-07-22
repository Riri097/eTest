import React, { useState } from "react";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Login({ onClose, toggleModals, setIsAuthenticated }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const navigate = useNavigate();
  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(baseUrl + "/account/login/", {
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
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div
        className="bg-white/10 backdrop-blur-md border border-purple-400 rounded-xl shadow-xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 text-center">
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
            className="w-full bg-white/20 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
            className="w-full bg-white/20 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-6 text-gray-300">
          Don't have an account?{" "}
          <button
            className="text-purple-400 font-semibold underline hover:text-purple-300 transition-colors duration-200"
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

export default Login;
