import React from "react";
import {
  BookOpenIcon,
  SparklesIcon,
  TrendingUpIcon,
  GraduationCap,
  ClockIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import page2 from "../../assets/Featurepage.png";

const features = [
  {
    title: "Topic-Based Question Generation",
    description:
      "Enter any topic or description and get AI-curated MCQs tailored just for you.",
    icon: BookOpenIcon,
  },
  {
    title: "Smart Learning Assistant",
    description:
      "AI intelligently understands your input and provides relevant questions.",
    icon: SparklesIcon,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your performance and growth with clear quiz analytics.",
    icon: TrendingUpIcon,
  },
  {
    title: "Wide Exam Coverage",
    description:
      "Supports school, college, and competitive exams in a single platform.",
    icon: GraduationCap,
  },
  {
    title: "Instant Results",
    description:
      "Get your quiz results instantly with performance breakdown.",
    icon: ClockIcon,
  },
  {
    title: "Minimal & Clean Interface",
    description:
      "User-friendly design focused on productivity and clarity.",
    icon: LayoutDashboardIcon,
  },
];

const Features = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${page2})` }}
    >
      {/* All Content in One Section */}
      <div className="relative py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-slate-900  px-4 sm:px-6 py-2 sm:py-3 rounded-xl inline-block">
              Platform Features
            </h1>
            <div className="backdrop-blur-sm rounded-xl p-3 sm:p-4 max-w-4xl mx-auto">
              <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed px-2">
                Everything you need for effective learning and exam preparation — all in one place.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-5 sm:p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-blue-100 flex-shrink-0">
                  {React.createElement(feature.icon, {
                    className: "w-5 h-5 sm:w-6 sm:h-6 text-blue-600",
                  })}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
