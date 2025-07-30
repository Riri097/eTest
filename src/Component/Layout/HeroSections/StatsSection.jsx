import React from "react";
import { FaBrain, FaChartLine, FaGraduationCap } from "react-icons/fa";
import { Award } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#75E6DA]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            Trusted by Students Worldwide
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Join our growing community of learners and see why millions trust us for their educational journey
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-6 border-blue-400 group hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
              <FaBrain className="text-xl sm:text-2xl text-blue-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-slate-700 font-semibold text-sm sm:text-base mb-1">Active Learners</div>
            <div className="text-xs sm:text-sm text-slate-500">Students learning daily across 120+ countries</div>
          </div>
          
          <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-6 border-blue-400 group hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
              <FaChartLine className="text-xl sm:text-2xl text-blue-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-slate-700 font-semibold text-sm sm:text-base mb-1">Success Rate</div>
            <div className="text-xs sm:text-sm text-slate-500">Students achieve their learning goals with our platform</div>
          </div>
          
          <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-6 border-blue-400 group hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
              <FaGraduationCap className="text-xl sm:text-2xl text-blue-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">1M+</div>
            <div className="text-slate-700 font-semibold text-sm sm:text-base mb-1">AI-Generated Questions</div>
            <div className="text-xs sm:text-sm text-slate-500">Constantly updated database of smart questions</div>
          </div>
          
          <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-6 border-blue-400 group hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
              <Award className="text-xl sm:text-2xl text-blue-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-slate-700 font-semibold text-sm sm:text-base mb-1">Smart Support</div>
            <div className="text-xs sm:text-sm text-slate-500">AI-powered assistance whenever you need help</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
