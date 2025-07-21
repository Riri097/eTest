import React from "react";
import { Settings as SettingsIcon, User, Bell, Shield, Globe, Palette, Database, Wrench, Calendar } from "lucide-react";

const Settings = () => {
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
            <SettingsIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Settings
          </h1>
          <p className="text-sm lg:text-base text-gray-300 max-w-2xl mx-auto">
            Customize your VedantaQ experience. Advanced settings panel is currently under development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Under Construction Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 border border-white/20 mb-6">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Under Construction</h2>
            <p className="text-gray-300 mb-3 text-sm">
              We're building a comprehensive settings panel to give you complete control over your learning experience.
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-400 mb-3">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Expected Launch: Coming Soon</span>
            </div>
          </div>

          {/* Coming Settings Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <User className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">Account Settings</h3>
              </div>
              <p className="text-gray-400 text-xs">Manage profile, password, and account preferences</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Bell className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">Notifications</h3>
              </div>
              <p className="text-gray-400 text-xs">Control email, push, and in-app notifications</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Palette className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">Appearance</h3>
              </div>
              <p className="text-gray-400 text-xs">Theme, layout, and visual customization options</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">Privacy & Security</h3>
              </div>
              <p className="text-gray-400 text-xs">Data privacy, security settings, and permissions</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">Language & Region</h3>
              </div>
              <p className="text-gray-400 text-xs">Language preferences and regional settings</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Database className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">Data & Storage</h3>
              </div>
              <p className="text-gray-400 text-xs">Manage your data, downloads, and storage options</p>
            </div>
          </div>
        </div>

        {/* Current Available Setting */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Available Now</h3>
          <p className="text-gray-300 mb-3 text-sm">
            While we're building the full settings panel, you can manage your profile information:
          </p>
          <button
            onClick={() => window.location.href = '/profile'}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
          >
            <User className="w-4 h-4" />
            Go to Profile Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
