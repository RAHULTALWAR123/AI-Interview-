import React from 'react';
import { FaRocket, FaHome, FaBriefcase, FaUser, FaSignOutAlt } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 w-[70%] max-w-4xl">
      {/* Glass morphic navbar */}
      <nav className="relative">
        {/* Background blur with gradient border */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-4xl border border-white/20 shadow-2xl shadow-black/20"></div>
        
        {/* Liquid glass animation overlay */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 animate-[liquid_3s_ease-in-out_infinite]"></div>
        </div>

        {/* Navbar content */}
        <div className="relative z-10 flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
            </div>
            <span className="text-white font-semibold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              InterviewAI
            </span>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 rounded-xl p-1 backdrop-blur-sm ">
            {[
              { icon: FaHome, label: 'Home' },
              { icon: FaBriefcase, label: 'Interviews' },
              { icon: FaUser, label: 'Profile' }
            ].map((item, index) => (
              <button
                key={item.label}
                className="flex items-center gap-2 px-6 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 group"
              >
                <item.icon className="text-sm group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Logout Button */}
          <button className="flex items-center gap-2 px-6 py-2 rounded-xl text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-200 group">
            <FaSignOutAlt className="text-sm group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;