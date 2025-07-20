import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ExamInput() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    topic: "",
    description: "",
    no_of_questions: 10,
    difficulty_level: "Medium",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("http://127.0.0.1:8000/exam/generate-questions", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
     },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.success) {
          localStorage.setItem("questions", JSON.stringify(data.questions));
          toast.success("Your exam is ready!");
          navigate("/quiz");
        } else {
          toast.error("Failed: " + data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Error: " + err.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] ml-64 flex justify-center items-center bg-[#BFCFBB]/20 p-6">
      {/* 
        min-h calc: subtract your Navbar height if fixed (assumed 4rem here)
        ml-64: margin left = sidebar width (16rem)
        background color is light green with opacity
      */}
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-10">
        <h1 className="text-3xl font-bold text-[#0B1F3A] mb-4">
          Ready to Take Your Test?
        </h1>
        <p className="text-[#0B1F3A]/80 mb-8">
          Fill in the details below to begin your personalized exam experience.
        </p>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-semibold text-[#0B1F3A] mb-2"
            >
              Exam Topic
            </label>
            <input
              id="topic"
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g. Lokesewa, IOE, CEE, CMAT"
              required
              className="w-full border border-[#0B1F3A]/40 rounded-md px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#344C3D]"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-[#0B1F3A] mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Briefly describe the subject or focus area"
              rows={4}
              required
              className="w-full border border-[#0B1F3A]/40 rounded-md px-5 py-3 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#344C3D]"
            />
          </div>

          <div>
            <label
              htmlFor="no_of_questions"
              className="block text-sm font-semibold text-[#0B1F3A] mb-2"
            >
              Number of Questions
            </label>
            <input
              id="no_of_questions"
              type="number"
              name="no_of_questions"
              value={formData.no_of_questions}
              onChange={handleChange}
              min={1}
              max={100}
              required
              className="w-full border border-[#0B1F3A]/40 rounded-md px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#344C3D]"
            />
          </div>

          <div>
            <label
              htmlFor="difficulty_level"
              className="block text-sm font-semibold text-[#0B1F3A] mb-2"
            >
              Difficulty Level
            </label>
            <select
              id="difficulty_level"
              name="difficulty_level"
              value={formData.difficulty_level}
              onChange={handleChange}
              className="w-full border border-[#0B1F3A]/40 rounded-md px-5 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#344C3D]"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md font-semibold text-white transition ${
              loading
                ? "bg-[#0B1F3A]/60 cursor-not-allowed"
                : "bg-[#0B1F3A] hover:bg-[#0B1F3A]]"
            }`}
          >
            {loading ? "Preparing Exam..." : "Start My Exam"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExamInput;
