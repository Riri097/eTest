import React from "react";
import { FaBrain, FaChartLine, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { Target, Award, Zap } from "lucide-react";
import Button from "../UI/Button";
import hero from "../../assets/herobg.png";

const Hero = () => {
  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div
      className="h-[90vh] sm:h-[85vh] md:h-[90vh] bg-cover bg-center bg-no-repeat flex items-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="lg:w-1/2 text-left">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{ color: "#0B1F3A" }}
          >
            Awaken The Mind,
            <span className="block" style={{ color: "#0B1F3A" }}>
              Master The Test
            </span>
          </h1>
          <p
            className="text-base sm:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed"
            style={{ color: "#333" }}
          >
            Transform your knowledge with personalized AI quizzes, adaptive
            learning paths, and real-time progress tracking. Join thousands of
            learners achieving their goals.
          </p>
          <div className="flex flex-col sm:flex-row">
            <Button 
              variant="primary" 
              onClick={() => navigate("/login")}
              className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
    </div>

      {/* Stats Section - Non-overlapping */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Trusted by Students Worldwide</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">Join our growing community of learners and see why millions trust us for their educational journey</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-6 border-orange-400 group hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-orange-200 transition-colors">
                <FaBrain className="text-xl sm:text-2xl text-orange-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-slate-700 font-semibold text-sm sm:text-base mb-1">Active Learners</div>
              <div className="text-xs sm:text-sm text-slate-500">Students learning daily across 120+ countries</div>
            </div>
            <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-6 border-green-400 group hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-green-200 transition-colors">
                <FaChartLine className="text-xl sm:text-2xl text-green-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">98%</div>
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
            <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-6 border-purple-400 group hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-purple-200 transition-colors">
                <Award className="text-xl sm:text-2xl text-purple-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-slate-700 font-semibold text-sm sm:text-base mb-1">Smart Support</div>
              <div className="text-xs sm:text-sm text-slate-500">AI-powered assistance whenever you need help</div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Card Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Choose Your Learning Path</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">Whether you're just starting or looking to advance your skills, we have the perfect learning experience for you.</p>
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
                  <Button variant="secondary" onClick={"/login"} >
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

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">What Our Students Say</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">Real stories from learners who transformed their careers and achieved their goals with our platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-orange-400 group hover:-translate-y-1">
              <div className="mb-4 sm:mb-6">
                <h4 className="font-bold text-slate-900 text-lg mb-1">Sarah Chen</h4>
                <p className="text-slate-500 text-sm">Software Developer</p>
              </div>
              <div className="mb-4 sm:mb-6">
                <div className="flex text-yellow-400 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base sm:text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  "The AI-powered quizzes helped me land my dream job at Google. The adaptive learning system knew exactly what I needed to improve on. Amazing platform!"
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-400 group hover:-translate-y-1">
              <div className="mb-4 sm:mb-6">
                <h4 className="font-bold text-slate-900 text-lg mb-1">Marcus Johnson</h4>
                <p className="text-slate-500 text-sm">Data Scientist</p>
              </div>
              <div className="mb-4 sm:mb-6">
                <div className="flex text-yellow-400 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base sm:text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  "From zero to data scientist in 6 months! The progress tracking kept me motivated, and the 24/7 support was incredibly helpful."
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-400 group hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <h4 className="font-bold text-slate-900 text-lg mb-1">Emily Rodriguez</h4>
                <p className="text-slate-500 text-sm">Student</p>
              </div>
              <div className="mb-4 sm:mb-6">
                <div className="flex text-yellow-400 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base sm:text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  "Passed my certification exam with 95%! The practice questions were so similar to the real test. This platform is a game-changer."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
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

      {/* Stats Section */}
      
    </div>
  );
};

export default Hero;
