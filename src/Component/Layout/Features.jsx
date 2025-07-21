import React from "react";

import {
  BookOpenIcon,
  SparklesIcon,
  TrendingUpIcon,
  GraduationCap,
  ClockIcon,
  LayoutDashboardIcon,
} from "lucide-react"; 

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-500 to-slate-900  px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Features of VedantaQ
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Built for learners, students, and exam aspirants to enhance your preparation journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/8 backdrop-blur-md text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/15 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {React.createElement(feature.icon, { className: "h-7 w-7 text-white" })}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed text-sm mb-4">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {idx === 0 && (
                    <div className="flex items-center gap-2 text-xs text-purple-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Powered by advanced AI algorithms</span>
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="flex items-center gap-2 text-xs text-blue-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Real-time performance insights</span>
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="flex items-center gap-2 text-xs text-green-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Unlock achievements & rewards</span>
                    </div>
                  )}
                  {idx === 3 && (
                    <div className="flex items-center gap-2 text-xs text-yellow-300">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      <span>Comprehensive exam coverage</span>
                    </div>
                  )}
                  {idx === 4 && (
                    <div className="flex items-center gap-2 text-xs text-pink-300">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                      <span>Instant feedback & explanations</span>
                    </div>
                  )}
                  {idx === 5 && (
                    <div className="flex items-center gap-2 text-xs text-cyan-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span>Distraction-free learning zone</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
