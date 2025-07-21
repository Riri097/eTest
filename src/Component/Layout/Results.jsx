import React, { useEffect, useState } from "react";

const Results = () => {
  const [results, setResults] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;


  useEffect(() => {
    fetch(baseUrl+ "/exam/results", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch results");
        return res.json();
      })
      .then((data) => setResults(data))
      .catch((err) => console.error(err));
  }, []);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const alphabet = ["A", "B", "C", "D"];

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-[#0B1F3A]">
        My Exam Results
      </h2>

      {results.map((result, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-[#0B1F3A]">
              Topic: {result.topic} | Score: {result.score}/
              {result.total_questions}
            </h3>
            <button
              onClick={() => toggleDetails(index)}
              className="text-sm text-blue-600 hover:underline"
            >
              {openIndex === index ? "Hide Details" : "View Details"}
            </button>
          </div>

          {openIndex === index && (
            <div className="mt-4 space-y-4">
              {result.details && result.details.length > 0 ? (
                result.details.map((q, i) => {
                  const correctIndex = alphabet.indexOf(q.answer || "");
                  const userIndex = alphabet.indexOf(q.user_answer || "");

                  return (
                    <div key={i} className="bg-gray-50 p-3 rounded">
                      <p className="font-medium text-[#0B1F3A] mb-2">
                        {q.question}
                      </p>

                      <ul className="list-disc list-inside space-y-1">
                        {q.options.map((opt, idx) => {
                          let className = "";

                          if (idx === correctIndex) {
                            className = "text-green-600 font-bold";
                          } else if (
                            idx === userIndex &&
                            userIndex !== correctIndex
                          ) {
                            className = "text-red-500 font-semibold";
                          }

                          return (
                            <li key={idx} className={className}>
                              {alphabet[idx]}: {opt}
                            </li>
                          );
                        })}
                      </ul>

                      <p className="mt-2">
                        Your Answer:{" "}
                        <span
                          className={
                            userIndex === correctIndex
                              ? "text-green-600 font-semibold"
                              : "text-red-500 font-semibold"
                          }
                        >
                          {q.user_answer
                            ? q.user_answer 
                            : "Not Answered"}
                        </span>
                      </p>

                      <p>
                        Correct Answer:{" "}
                        <span className="font-semibold text-green-600">
                          {q.answer}
                        </span>
                      </p>
                    </div>
                  );
                })
              ) : (
                <p>No details available.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Results;