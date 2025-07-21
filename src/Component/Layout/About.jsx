import React from "react";
import { BookOpen, Users, TrendingUp, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-500 to-slate-900 overflow-hidden text-white px-6 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About VedantaQ
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An intelligent learning platform designed to empower students with personalized MCQs tailored to their interests.
          </p>
        </div>

        {/* Cards Grid - Uneven Layout */}
        <div className="space-y-6 mb-16">
          {/* First Row - Mission takes 2/3, Who It's For takes 1/3 */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Mission - Wider card */}
            <div className="md:col-span-2 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Star size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-300 mb-3">Our Mission</h3>
              <p className="text-gray-300 text-sm">
                To empower learners with targeted, high-quality questions that adapt to their needs and learning pace.
              </p>
            </div>

            {/* Who It's For - Smaller card */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:scale-105 transition-transform duration-300 flex flex-col justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-300 mb-3 text-center">Who It's For</h3>
              <p className="text-gray-300 text-sm text-center">
                Students & exam aspirants
              </p>
            </div>
          </div>

          {/* Second Row - What We Offer takes full width but shorter height */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <BookOpen size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-300 mb-2">What We Offer</h3>
                <p className="text-gray-300 text-sm">
                  AI-generated MCQs, progress tracking, and a clean interface for focused learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mb-12">
          <blockquote className="text-2xl font-medium text-gray-300 italic mb-4">
            "Learning never exhausts the mind."
          </blockquote>
          <cite className="text-purple-400">– Leonardo da Vinci</cite>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => window.location.href = "/features"}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300"
          >
            Explore Features
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
