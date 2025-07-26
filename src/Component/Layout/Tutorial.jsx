import React from "react";
import { BookOpen, FileText, BarChart3, Play } from "lucide-react";

function Tutorial() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-slate-900" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Welcome to VedantaQ!
          </h1>
          <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
            Thank you for choosing us to support your exam preparation journey. Get started with our comprehensive learning platform.
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-4 lg:p-6 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-lg">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold flex-shrink-0 text-sm lg:text-base">
                1
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Start a New Exam
                </h2>
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                  Head over to your <span className="text-blue-600 font-semibold">Dashboard</span> and click the{" "}
                  <span className="text-blue-600 font-semibold">"Start New Exam"</span> button. Fill in the topic, description, number of questions, and difficulty level.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 lg:p-6 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-lg">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold flex-shrink-0 text-sm lg:text-base">
                2
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Answer the Questions
                </h2>
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                  Navigate through the quiz using <span className="text-blue-600 font-semibold">Next</span> and{" "}
                  <span className="text-blue-600 font-semibold">Previous</span> buttons. A countdown timer helps you manage your time efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 lg:p-6 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-lg">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold flex-shrink-0 text-sm lg:text-base">
                3
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Submit and Review
                </h2>
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                  Once you're done, hit <span className="text-green-600 font-semibold">Submit</span>. You'll get your score immediately along with detailed analysis to track your progress.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 lg:p-6 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-lg">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold flex-shrink-0 text-sm lg:text-base">
                4
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2">
                  🔄 Practice Anytime
                </h2>
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
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
