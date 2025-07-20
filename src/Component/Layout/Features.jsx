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
    <div className="min-h-screen bg-white text-[#0B1F3A] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Features of VedantaQ</h2>
        <p className="text-lg text-[#6B7B68] mb-12">
          Built for learners, students, and exam aspirants to enhance your preparation journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#E7F2F8] text-[#0B1F3A] p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300"
            >
              <feature.icon className="h-8 w-8 text-[#0B1F3A] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-[#375147]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
