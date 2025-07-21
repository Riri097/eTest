import React, { useEffect, useState } from "react";
import { BarChart3, BookOpen, Clock, Trophy, Target, TrendingUp, FileText } from "lucide-react";

const Results = () => {
  const [results, setResults] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const capitalizeTitle = (str) => {
    if (!str) return '';
    return str.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };

  const formatDate = (dateString) => {
    try {
      if (!dateString) return 'Date not available';
      
      const date = new Date(dateString);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return 'Invalid date';
      }
      
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Date formatting error';
    }
  };

  // Helper function to get date from result object
  const getResultDate = (result) => {
    // Check multiple possible date field names
    const dateField = result.created_at || result.date || result.timestamp || result.createdAt;
    
    if (dateField) {
      return formatDate(dateField);
    }
    
    // If no date field found, return current date
    return formatDate(new Date().toISOString());
  };

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
      .then((data) => {
        console.log('Results data:', data); // Debug log
        if (data && data.length > 0) {
          console.log('First result object keys:', Object.keys(data[0])); // Debug log
          console.log('First result sample:', data[0]); // Debug log
        }
        setResults(data);
      })
      .catch((err) => console.error(err));
  }, [baseUrl]);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const alphabet = ["A", "B", "C", "D"];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 p-6 lg:p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-3">
            My Exam Results
          </h1>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
            Track your progress and review your performance across all completed exams
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Results Grid */}
        <div className="grid gap-6">
          {results.length === 0 ? (
            <div className="text-center py-20 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">No Results Yet</h3>
              <p className="text-gray-400 text-lg mb-6">Take your first exam to see your results here</p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your First Exam
              </button>
            </div>
          ) : (
            results.map((result, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-xl"
              >
                {/* Result Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {capitalizeTitle(result.topic)}
                          </h3>
                          <p className="text-gray-400 text-xs">
                            {getResultDate(result)}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Score Display */}
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                          {result.score}/{result.total_questions}
                        </div>
                        <p className="text-gray-400 text-xs">Score</p>
                      </div>
                      
                      <div className="text-center">
                        <div className={`text-2xl lg:text-3xl font-bold ${
                          Math.round((result.score / result.total_questions) * 100) >= 80 
                            ? 'text-green-400' 
                            : Math.round((result.score / result.total_questions) * 100) >= 60 
                            ? 'text-yellow-400' 
                            : 'text-red-400'
                        }`}>
                          {Math.round((result.score / result.total_questions) * 100)}%
                        </div>
                        <p className="text-gray-400 text-xs">Percentage</p>
                      </div>

                      <button
                        onClick={() => toggleDetails(index)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm ${
                          openIndex === index
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white'
                            : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white'
                        }`}
                      >
                        {openIndex === index ? "Hide Details" : "View Details"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Detailed Questions View */}
                {openIndex === index && (
                  <div className="p-6 bg-white/5 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-400" />
                      Question-wise Analysis
                    </h4>
                    
                    <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                      {result.details && result.details.length > 0 ? (
                        result.details.map((q, i) => {
                          const correctIndex = alphabet.indexOf(q.answer || "");
                          const userIndex = alphabet.indexOf(q.user_answer || "");

                          return (
                            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                                  {i + 1}
                                </div>
                                <p className="font-medium text-gray-200 leading-relaxed text-sm">
                                  {q.question}
                                </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                                {q.options.map((opt, idx) => {
                                  const letter = alphabet[idx];
                                  const isCorrect = idx === correctIndex;
                                  const isUserAnswer = idx === userIndex;

                                  return (
                                    <div
                                      key={idx}
                                      className={`p-3 rounded-lg border transition-all duration-300 ${
                                        isCorrect
                                          ? "bg-green-500/20 border-green-400 text-green-300"
                                          : isUserAnswer && !isCorrect
                                          ? "bg-red-500/20 border-red-400 text-red-300"
                                          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                                      }`}
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm">
                                          <span className="font-bold">{letter}.</span> {opt}
                                        </span>
                                        {isCorrect && (
                                          <span className="text-green-400 text-xl">✓</span>
                                        )}
                                        {isUserAnswer && !isCorrect && (
                                          <span className="text-red-400 text-xl">✗</span>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                              <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                                  <span className="text-gray-400">Your Answer:</span>
                                  <span className={`font-semibold ${
                                    userIndex === correctIndex ? 'text-green-400' : 'text-red-400'
                                  }`}>
                                    {q.user_answer || "Not Answered"}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                  <span className="text-gray-400">Correct Answer:</span>
                                  <span className="font-semibold text-green-400">{q.answer}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-400 text-lg">No detailed analysis available for this exam.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;