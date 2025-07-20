import { useNavigate } from "react-router-dom";
import { BookOpen, BarChart2, Clock, CheckCircle } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("username");

  const stats = [
    {
      label: "Exams Taken",
      value: 12,
      icon: <BookOpen className="w-10 h-10 text-[#344C3D]" />,
    },
    {
      label: "Average Score",
      value: "85%",
      icon: <BarChart2 className="w-10 h-10 text-[#344C3D]" />,
    },
    {
      label: "Quizzes in Progress",
      value: 3,
      icon: <Clock className="w-10 h-10 text-[#344C3D]" />,
    },
    {
      label: "Completed Topics",
      value: 5,
      icon: <CheckCircle className="w-10 h-10 text-[#344C3D]" />,
    },
  ];

  return (
    <main className="flex-1 bg-gray-50 p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-[#344C3D] mb-1">
            Welcome back, {user}!
          </h1>
          <p className="text-gray-600">
            Here’s a quick overview of your recent activity and progress.
          </p>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map(({ label, value, icon }) => (
            <div
              key={label}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-5 flex items-center gap-4 border border-[#e5e7eb]"
            >
              <div className="bg-[#BFCFBB] rounded-full p-3">{icon}</div>
              <div>
                <p className="text-2xl font-bold text-[#344C3D]">{value}</p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Action */}
        <section className="text-center">
          <button
            onClick={() => navigate("/exam")}
            className="bg-[#344C3D] hover:bg-[#2a3a30] text-white font-semibold px-6 py-3 rounded-lg shadow"
          >
            Start New Exam
          </button>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
