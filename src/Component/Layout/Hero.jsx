import React, { useState, useEffect } from "react";
import { FaBrain, FaChartLine, FaClipboardList, FaRocket, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { BookOpen, ShieldCheck, Users, Zap, Target, Award } from "lucide-react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const features = [
  {
    icon: FaBrain,
    title: "AI-Powered Learning",
    description: "Advanced algorithms create personalized quiz experiences that adapt to your learning style and pace.",
  },
  {
    icon: FaChartLine,
    title: "Smart Analytics",
    description: "Detailed insights and performance metrics help you identify strengths and areas for improvement.",
  },
  {
    icon: FaClipboardList,
    title: "Gamified Progress",
    description: "Earn achievements, unlock levels, and compete with friends to make learning addictive and fun.",
  },
];

const highlights = [
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "Get instant feedback and explanations the moment you submit your answers.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Target,
    title: "Precision Learning",
    description: "Focus on exactly what you need to learn with our adaptive difficulty system.",
    gradient: "from-green-400 to-blue-500",
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Unlock badges, earn points, and climb leaderboards as you master new concepts.",
    gradient: "from-purple-400 to-pink-500",
  },
];

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-400 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center px-6">
        <section className="max-w-6xl w-full flex flex-col md:flex-row items-center py-20 gap-12">
          <div className="md:w-1/2 text-left">
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Master Knowledge with 
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                VedantaQ
              </span>
            </h1>

            <p className="text-xl mb-8 text-gray-300 leading-relaxed max-w-lg">
              Experience the future of learning with our AI-powered quiz platform. 
              <span className="text-purple-300 font-semibold"> Personalized. Intelligent. Effective.</span>
            </p>

            <div className="flex gap-4 mb-8">
              <Button variant="primary" onClick={() => navigate("/signup")}>
                <FaGraduationCap className="inline mr-2" />
                Start Learning 
              </Button>
              <Button variant="secondary" onClick={() => navigate("/Features")}>
                <FaLightbulb className="inline mr-2" />
                See More
              </Button>
            </div>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-purple-400">50K+</span>
                <span className="ml-2 text-sm">Active Learners</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-pink-400">1M+</span>
                <span className="ml-2 text-sm">Questions Solved</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center"></div>
        </section>

        <section className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => (
            <Card key={feature.title} {...feature} />
          ))}
        </section>

        <section className="w-full max-w-6xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/50 to-purple-600/50 backdrop-blur-sm rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-3xl"></div>

          <div className="relative py-16 px-8 text-center">
            <div className="inline-flex items-center bg-orange-500/20 rounded-full px-6 py-3 mb-6 border border-orange-400/30">
              <Award className="text-orange-400 mr-2" size={20} />
              <span className="text-orange-300 font-medium">Why Choose Excellence?</span>
            </div>

            <h2 className="text-5xl font-extrabold text-white mb-4 leading-tight">
              Transform Your Learning
              <span className="block text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                Experience
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join a revolution in education where technology meets pedagogy to create 
              <span className="text-orange-300 font-semibold"> unforgettable learning moments</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {highlights.map(({ icon: Icon, title, description, gradient }) => (
                <div key={title} className="group cursor-pointer">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                    <p className="text-gray-300 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md rounded-2xl p-8 border border-orange-400/30">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to unlock your potential?
              </h3>
              <p className="mb-8 text-gray-300 max-w-2xl mx-auto text-lg">
                Join thousands of successful learners who've transformed their knowledge with VedantaQ's innovative approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" onClick={() => navigate("/signup")}>
                  <FaRocket className="inline mr-2" />
                  Begin Your Journey
                </Button>
                <Button variant="secondary" onClick={() => navigate("/pricing")}>
                  View Plans
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
