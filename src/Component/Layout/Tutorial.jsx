import React from "react";
import { BookOpen, FileText, BarChart3, Play } from "lucide-react";

function Tutorial() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 p-4 lg:p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-3">
            Welcome to VedantaQ!
          </h1>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
            Thank you for choosing us to support your exam preparation journey. Get started with our comprehensive learning platform.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm lg:text-base">
                1
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-purple-300 mb-2 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Start a New Exam
                </h2>
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                  Head over to your <span className="text-purple-400 font-semibold">Dashboard</span> and click the{" "}
                  <span className="text-pink-400 font-semibold">"Start New Exam"</span> button. Fill in the topic, description, number of questions, and difficulty level.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm lg:text-base">
                2
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-purple-300 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Answer the Questions
                </h2>
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                  Navigate through the quiz using <span className="text-purple-400 font-semibold">Next</span> and{" "}
                  <span className="text-purple-400 font-semibold">Previous</span> buttons. A countdown timer helps you manage your time efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm lg:text-base">
                3
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-purple-300 mb-2 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Submit and Review
                </h2>
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                  Once you're done, hit <span className="text-green-400 font-semibold">Submit</span>. You'll get your score immediately along with detailed analysis to track your progress.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm lg:text-base">
                4
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-purple-300 mb-2">
                  🔄 Practice Anytime
                </h2>
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                  Take unlimited quizzes! Experiment with different topics and difficulty levels to sharpen your skills and boost your confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
