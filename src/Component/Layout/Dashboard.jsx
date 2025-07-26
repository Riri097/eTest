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
      icon: <BookOpen className="w-10 h-10 text-blue-400" />,
    },
    {
      label: "Average Score",
      value: "85%",
      icon: <BarChart2 className="w-10 h-10 text-blue-400" />,
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
    <main className="w-full min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-slate-900" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Welcome back, {user}!
            </h1>
          </div>
          <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to continue your learning journey? Here's your personalized dashboard with insights and progress.
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {stats.map(({ label, value, icon }) => (
            <div
              key={label}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-200 hover:border-blue-400 hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                  {icon}
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900 mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    {value}
                  </p>
                  <p className="text-slate-600 font-medium">{label}</p>
                </div>
              </div>
              <div className="mt-4 h-1 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 rounded-full transform scale-x-75 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
          <div className="max-w-xl mx-auto">
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-slate-900" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready for Your Next Challenge?</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Test your knowledge and skills with our comprehensive exam system. Track your progress and improve with every attempt.
            </p>
            <button
              onClick={() => navigate("/exam")}
              className="group bg-blue-400 hover:bg-blue-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
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
