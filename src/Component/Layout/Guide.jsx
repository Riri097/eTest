import React from "react";
import { BookOpen, PlayCircle, UserPlus, CheckCircle } from "lucide-react";
import Guidepage from "../../assets/Guidepage.png";

function Guide() {

  const steps = [
    {
      icon: BookOpen,
      title: "Explore Features",
      description: "Discover AI-powered quizzes and learning tools"
    },
    {
      icon: PlayCircle,
      title: "Try Sample Quizzes",
      description: "Experience our question formats and instant feedback"
    },
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up for personalized learning and progress tracking"
    },
    {
      icon: CheckCircle,
      title: "Start Learning",
      description: "Begin your journey with tailored quizzes and courses"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${Guidepage})` }}
    >
      {/* All Content in One Section */}
      <div className="relative py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-slate-900 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-lg inline-block">
              Quick Start Guide
            </h1>
            <div className="backdrop-blur-sm rounded-lg p-3 max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-slate-700">
                Get started in just a few simple steps
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="grid gap-4 sm:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-base sm:text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base">{step.description}</p>
                  </div>
                  <IconComponent className="text-slate-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
