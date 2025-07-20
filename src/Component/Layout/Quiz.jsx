import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "react-toastify";

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
    questions.forEach((q, i) => {
      let correct_answer = "";
      if (q.answer === 1) correct_answer = "A";
      else if (q.answer === 2) correct_answer = "B";
      else if (q.answer === 3) correct_answer = "C";
      else if (q.answer === 4) correct_answer = "D";

      if (answers[i] === correct_answer) score++;
    });
    toast.success(`You scored ${score} out of ${questions.length}`);
    navigate("/");
  };

  if (!questions.length) return null;

  const question = questions[currentIndex];
  const options = question.options.split(",").map((opt) => opt.trim());

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        <div className="text-center font-semibold text-[#0B1F3A] mb-6 text-xl tracking-wide">
          Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
        </div>

        <h2 className="text-center text-2xl font-semibold text-[#0B1F3A] mb-4">
          Question {currentIndex + 1} of {questions.length}
        </h2>

        <p className="mb-8 text-gray-800 text-xl font-medium text-center">
          {question.question}
        </p>

        <div className="flex flex-col items-center gap-4">
          {["A", "B", "C", "D"].map((opt, i) => (
            <label
              key={opt}
              className={`w-full max-w-xl flex items-center gap-4 cursor-pointer rounded-md border px-5 py-4 text-lg
                ${
                  answers[currentIndex] === opt
                    ? "bg-[#0B1F3A] text-white border-[#0B1F3A]"
                    : "bg-white text-[#0B1F3A] border-gray-300 hover:bg-[#BFCFBB]"
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
                {opt}: {options[i]}
              </span>
            </label>
          ))}
        </div>

        <div className="flex justify-between mt-10 max-w-xl mx-auto">
          <button
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold border transition
              ${
                currentIndex === 0
                  ? "text-gray-400 border-gray-400 cursor-not-allowed"
                  : "bg-white text-[#0B1F3A] hover:bg-[#BFCFBB] border-[#0B1F3A]"
              }`}
          >
            <ChevronLeft size={24} />
            Prev
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            disabled={currentIndex === questions.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold border transition
              ${
                currentIndex === questions.length - 1
                  ? "text-gray-400 border-gray-400 cursor-not-allowed"
                  : "bg-white text-[#0B1F3A] hover:bg-[#BFCFBB] border-[#0B1F3A]"
              }`}
          >
            Next
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleSubmit}
            className="bg-[#0B1F3A] hover:bg-[#081933] transition text-white font-semibold px-8 py-3 rounded-lg shadow-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
