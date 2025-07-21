import React, { useState } from "react";
import { BookOpen, Clock, Hash, FileText } from "lucide-react";
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
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 p-6 lg:p-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-3">
            Create Your Exam
          </h1>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Customize your learning experience by setting up a personalized exam tailored to your study needs.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 lg:p-8 border border-white/20">

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-base font-semibold text-white">
              <FileText className="w-5 h-5 text-purple-400" />
              Exam Topic
            </label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g. Lokesewa, IOE, CEE, CMAT, JavaScript, Mathematics"
              required
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-3 text-lg font-semibold text-white">
              <FileText className="w-6 h-6 text-purple-400" />
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide a detailed description of the subject area, specific topics, or focus areas you want to be tested on..."
              rows={4}
              required
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
            />
          </div>

          {/* Number of Questions and Difficulty in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-lg font-semibold text-white">
                <Hash className="w-6 h-6 text-purple-400" />
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
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 text-lg font-semibold text-white">
                <Clock className="w-6 h-6 text-purple-400" />
                Difficulty Level
              </label>
              <select
                name="difficulty_level"
                value={formData.difficulty_level}
                onChange={handleChange}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
              >
                <option value="Easy" className="bg-gray-800 text-white">Easy</option>
                <option value="Medium" className="bg-gray-800 text-white">Medium</option>
                <option value="Hard" className="bg-gray-800 text-white">Hard</option>
              </select>
            </div>
          </div>

          <div className="pt-8">
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-bold py-6 px-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 text-xl ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-2xl"
              }`}
            >
              <span className="flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    Preparing Your Exam...
                  </>
                ) : (
                  <>
                    <BookOpen className="w-6 h-6 text-white" />
                    Start My Exam
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default ExamInput;