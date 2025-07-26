import React from "react";
import { Brain, Sparkles, Target } from "lucide-react";

const aboutDetails = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description:
      "VedantaQ uses artificial intelligence to generate topic-based MCQs instantly, helping users practice smarter, not harder.",
  },
  {
    icon: Sparkles,
    title: "Personalized Experience",
    description:
      "Designed for students of all levels, the platform adapts to your study needs and provides focused question sets.",
  },
  {
    icon: Target,
    title: "Exam-Oriented Approach",
    description:
      "Supports preparation for school, college, and competitive exams with progress tracking and instant results.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* All Content in One Section */}
      <div className="relative py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-slate-900 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl inline-block">
              About VedantaQ
            </h1>
            <div className="backdrop-blur-sm rounded-xl p-3 sm:p-4 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-800 max-w-4xl mx-auto leading-relaxed mb-3 sm:mb-4 px-2">
                AI-powered learning platform designed to transform your educational journey
              </p>
              <p className="text-slate-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2">
                VedantaQ is a smart MCQ-generation platform powered by AI, created to make learning more efficient and engaging. Whether you're revising a subject or preparing for exams, VedantaQ helps you generate tailored questions based on your needs — instantly.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {aboutDetails.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 sm:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
