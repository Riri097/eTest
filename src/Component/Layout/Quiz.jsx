import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "react-toastify";
import Latex from "react-latex-next";

function Quiz() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    } else {
      toast.error("No quiz data found.");
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (e) => {
    setAnswers({ ...answers, [currentIndex]: e.target.value });
  };

  const handleSubmit = () => {
    let score = 0;
    const details = [];

    questions.forEach((q, i) => {
      let correct_answer = "";
      if (q.answer === 1) correct_answer = "A";
      else if (q.answer === 2) correct_answer = "B";
      else if (q.answer === 3) correct_answer = "C";
      else if (q.answer === 4) correct_answer = "D";

      const user_answer = answers[i] || null;

      if (user_answer === correct_answer) score++;

      details.push({
        question: q.question,
        options: q.options.split("@@@").map((opt) => opt.trim()),
        answer: correct_answer,
        user_answer: user_answer,
      });
    });

    const topic = localStorage.getItem("topic");
    const baseUrl = import.meta.env.VITE_API_BASE_URL;


    fetch(baseUrl + "/exam/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        score: score,
        total_questions: questions.length,
        topic: topic,
        details: details,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save result");
        return res.json();
      })
      .then(() => {
        toast.success(`You scored ${score} out of ${questions.length}`);
        navigate("/results");
      })
      .catch((err) => {
        toast.error("Error saving result: " + err.message);
      });
  };

  if (!questions.length) return null;

  const question = questions[currentIndex];
  const options = question.options.split("@@@").map((opt) => opt.trim());

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md mt-8">
      {/* Timer */}
      <div className="text-right font-semibold text-[#0B1F3A] mb-4 text-lg">
        Time Left:{" "}
        <span>
          {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
        </span>
      </div>

      {/* Question number */}
      <h2 className="text-xl font-semibold text-[#0B1F3A] mb-2">
        Question {currentIndex + 1} of {questions.length}
      </h2>

      {/* Question Text */}
      <p className="mb-6 text-gray-700">
        <Latex>{question.question}</Latex>
      </p>

      {/* Options */}
      <div className="space-y-3">
        {["A", "B", "C", "D"].map((opt, i) => (
          <label
            key={opt}
            className={`flex items-center gap-3 cursor-pointer rounded-md border px-4 py-3
              ${
                answers[currentIndex] === opt
                  ? "bg-[#0B1F3A] text-white border-[#0B1F3A]"
                  : "bg-white text-[#0B1F3A] border-gray-300 hover:bg-[#e0e7ff]"
              } transition-colors duration-200`}
          >
            <input
              type="radio"
              name={`q-${currentIndex}`}
              value={opt}
              checked={answers[currentIndex] === opt}
              onChange={handleAnswer}
              className="form-radio text-[#0B1F3A]"
            />
            <span>
              {opt}: <Latex>{options[i]}</Latex>
            </span>
          </label>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1 px-5 py-2 rounded-md font-semibold border border-[#0B1F3A] transition
            ${
              currentIndex === 0
                ? "text-gray-400 border-gray-400 cursor-not-allowed"
                : "bg-white text-[#0B1F3A] hover:bg-[#e0e7ff]"
            }`}
        >
          <ChevronLeft size={20} />
          Prev
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          disabled={currentIndex === questions.length - 1}
          className={`flex items-center gap-1 px-5 py-2 rounded-md font-semibold border border-[#0B1F3A] transition
            ${
              currentIndex === questions.length - 1
                ? "text-gray-400 border-gray-400 cursor-not-allowed"
                : "bg-white text-[#0B1F3A] hover:bg-[#e0e7ff]"
            }`}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleSubmit}
          className="bg-[#0B1F3A] hover:bg-[#081933] transition text-white font-semibold px-6 py-3 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Quiz;