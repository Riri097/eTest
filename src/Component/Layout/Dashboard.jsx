import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, BarChart2, Clock, CheckCircle } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("username");

  const stats = [
    {
      label: "Exams Taken",
      value: 12,
      icon: <BookOpen className="w-10 h-10 text-purple-400" />,
    },
    {
      label: "Average Score",
      value: "85%",
      icon: <BarChart2 className="w-10 h-10 text-pink-400" />,
    },
    {
      label: "Quizzes in Progress",
      value: 3,
      icon: <Clock className="w-10 h-10 text-blue-400" />,
    },
    {
      label: "Completed Topics",
      value: 5,
      icon: <CheckCircle className="w-10 h-10 text-green-400" />,
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 p-6 lg:p-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Welcome back, {user}!
            </h1>
          </div>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to continue your learning journey? Here's your personalized dashboard with insights and progress.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {stats.map(({ label, value, icon }) => (
            <div
              key={label}
              className="group bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20 hover:border-white/30 hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                    {value}
                  </p>
                  <p className="text-gray-300 font-medium">{label}</p>
                </div>
              </div>
              <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-75 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <div className="max-w-xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Ready for Your Next Challenge?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Test your knowledge and skills with our comprehensive exam system. Track your progress and improve with every attempt.
            </p>
            <button
              onClick={() => navigate("/exam")}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                Start New Exam
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
