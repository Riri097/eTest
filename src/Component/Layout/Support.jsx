import React from "react";
import { HelpCircle, Mail, MessageCircle, Phone, Wrench, Calendar, Construction } from "lucide-react";

const Support = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 p-6 lg:p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Construction className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Support Center
          </h1>
          <p className="text-sm lg:text-base text-gray-300 max-w-2xl mx-auto">
            We're building something amazing for you! Our support system is currently under development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Under Construction Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 border border-white/20 mb-6">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Under Construction</h2>
            <p className="text-gray-300 mb-3 text-sm">
              Our dedicated support center is being crafted to provide you with the best assistance possible.
            </p>
            <div className="flex items-center justify-center gap-2 text-yellow-400 mb-3">
              <Calendar className="w-4 h-4" />
              <span className="text-xs">Expected Launch: Coming Soon</span>
            </div>
          </div>

          {/* Coming Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">Help Center</h3>
              </div>
              <p className="text-gray-400 text-xs">Comprehensive FAQ and troubleshooting guides</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">Live Chat</h3>
              </div>
              <p className="text-gray-400 text-xs">Real-time assistance from our support team</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">Email Support</h3>
              </div>
              <p className="text-gray-400 text-xs">Detailed support via email for complex issues</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">Phone Support</h3>
              </div>
              <p className="text-gray-400 text-xs">Direct phone line for urgent matters</p>
            </div>
          </div>
        </div>

        {/* Temporary Contact Info */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Need Help Right Now?</h3>
          <p className="text-gray-300 mb-3 text-sm">
            While we're building our support center, you can still reach us through:
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <a
              href="mailto:support@vedantaq.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
            >
              <Mail className="w-4 h-4" />
              Email Support
            </a>
            <button
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 text-sm"
              onClick={() => window.location.href = '/contact'}
            >
              <MessageCircle className="w-4 h-4" />
              Contact Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
