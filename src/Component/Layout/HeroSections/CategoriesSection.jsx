import React from "react";
import { FaBrain, FaChartLine } from "react-icons/fa";
import { Award, Zap } from "lucide-react";

const CategoriesSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#75E6DA]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Popular Learning Categories</h2>
          <p className="text-lg sm:text-xl text-slate-600 px-4">Explore our most loved subjects and start building expertise today</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <FaBrain className="text-lg sm:text-2xl text-slate-900" />
            </div>
            <h4 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Programming</h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">Master coding fundamentals</p>
            <div className="text-xs text-[#1E3A8A] font-medium">2,847 quizzes</div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <FaChartLine className="text-lg sm:text-2xl text-slate-900" />
            </div>
            <h4 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Data Science</h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">Analytics & visualization</p>
            <div className="text-xs text-[#1E3A8A] font-medium">1,523 quizzes</div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Award className="text-lg sm:text-2xl text-slate-900" />
            </div>
            <h4 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Certifications</h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">Industry standard exams</p>
            <div className="text-xs text-[#1E3A8A] font-medium">956 quizzes</div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Zap className="text-lg sm:text-2xl text-slate-900" />
            </div>
            <h4 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Quick Tests</h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">Fast skill assessments</p>
            <div className="text-xs text-[#1E3A8A] font-medium">3,241 quizzes</div>
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <button className="text-[#1E3A8A] hover:text-slate-900 font-medium text-base sm:text-lg hover:underline transition-colors">
            View All Categories →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
