import React from "react";
import { FaBrain, FaChartLine, FaLightbulb } from "react-icons/fa";
import { Target } from "lucide-react";
import Button from "../../UI/Button";

const LearningPathSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#75E6DA]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Whether you're just starting or looking to advance your skills, we have the perfect learning experience for you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Start Your Journey
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Begin with fundamentals and build your confidence with guided quizzes, instant feedback, and progress tracking.
                </p>
                <Button variant="secondary" onClick={"/login"}>
                  <FaLightbulb className="inline mr-2 text-slate-900" />
                  Get Started
                </Button>
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-orange-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaBrain className="text-2xl sm:text-3xl text-slate-900" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Master Advanced Skills
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Challenge yourself with complex problems, compete globally, and earn industry-recognized certifications.
                </p>
                <Button variant="secondary">
                  <Target className="inline mr-2 text-slate-900" />
                  Take Challenge
                </Button>
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaChartLine className="text-2xl sm:text-3xl text-slate-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;
