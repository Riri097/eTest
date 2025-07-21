import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    const baseUrl = import.meta.env.VITE_API_BASE_URL;


    fetch(baseUrl + "/exam/generate-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` },
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
          localStorage.setItem("topic", formData.topic);
          localStorage.setItem("no_of_questions", formData.no_of_questions);

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
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-2">
          Ready to Take Your Test?
        </h1>
        <p className="text-gray-600 mb-6">
          Fill in the details below to begin your personalized exam experience.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exam Topic
            </label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g. Lokesewa, IOE, CEE, CMAT"
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
             Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Give us a brief about the subject or focus area"
              rows={4}
              required
              className="w-full border rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Questions
            </label>
            <input
              type="number"
              name="no_of_questions"
              value={formData.no_of_questions}
              onChange={handleChange}
              min={1}
              max={100}
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Difficulty Level
            </label>
            <select
              name="difficulty_level"
              value={formData.difficulty_level}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-3 px-6 rounded-md transition ${
              loading
                ? "bg-[#0B1F3A]/50 cursor-not-allowed"
                : "bg-[#0B1F3A] hover:bg-[#132d56]"
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