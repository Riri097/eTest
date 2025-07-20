import React, { useEffect, useState } from "react";

const Results = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://42scszck-8000.inc1.devtunnels.ms/exam/results", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch results");
        return res.json();
      })
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Capitalize first letter of each word in topic
  const capitalizeTopic = (topic) =>
    topic
      .toLowerCase()
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-tight">
          My Exam Results
        </h1>

        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading your results...</p>
        ) : results.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No results found yet.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {capitalizeTopic(result.topic)}
                </h2>

                <div className="text-gray-700 space-y-2">
                  <p>
                    <span className="font-medium">Score:</span>{" "}
                    {result.score} / {result.total_questions}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(result.exam_date).toLocaleString(undefined, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;