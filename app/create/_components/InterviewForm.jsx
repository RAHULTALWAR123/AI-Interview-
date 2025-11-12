import React from 'react';
import { FaBriefcase, FaFileAlt, FaChartBar, FaArrowRight } from 'react-icons/fa';

function InterviewForm() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 pt-40"> {/* Added pt-24 for navbar spacing */}
      {/* Glass morphic form container */}
      <div className="relative w-full max-w-2xl">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl shadow-purple-500/10"></div>
        
        {/* Shimmer overlay */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Form content */}
        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">
              Create New Interview
            </h2>
            <p className="text-gray-300">
              Configure your personalized AI interview session
            </p>
          </div>

          <form className="space-y-6">
            {/* Interview Title */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white font-medium text-sm">
                <FaBriefcase className="text-purple-400" />
                Interview Title
              </label>
              <input
                type="text"
                placeholder="e.g., Senior Frontend Developer Interview"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              />
            </div>

            {/* Interview Type */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white font-medium text-sm">
                <FaFileAlt className="text-blue-400" />
                Interview Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Technical', 'HR', 'Behavioral'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 focus:bg-purple-500/20 focus:border-purple-400 transition-all duration-200 backdrop-blur-sm text-sm font-medium"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Description */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white font-medium text-sm">
                <FaFileAlt className="text-green-400" />
                Job Description
              </label>
              <textarea
                placeholder="Paste the job description here...&#10;• Required skills&#10;• Responsibilities&#10;• Qualifications"
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400/50 focus:bg-white/10 transition-all duration-200 backdrop-blur-sm resize-none"
              />
            </div>

            {/* Difficulty Level */}
<div className="space-y-2">
  <label className="flex items-center gap-2 text-white font-medium text-sm">
    <FaChartBar className="text-orange-400" />
    Difficulty Level
  </label>
  <div className="flex gap-3">
    {[
      { 
        level: 'Easy', 
        textColor: 'text-green-400',
        borderColor: 'border-green-400/40',
        hoverBorder: 'hover:border-green-400/60'
      },
      { 
        level: 'Medium', 
        textColor: 'text-yellow-400',
        borderColor: 'border-yellow-400/40',
        hoverBorder: 'hover:border-yellow-400/60'
      },
      { 
        level: 'Hard', 
        textColor: 'text-orange-400',
        borderColor: 'border-orange-400/40',
        hoverBorder: 'hover:border-orange-400/60'
      },
      { 
        level: 'Expert', 
        textColor: 'text-red-400',
        borderColor: 'border-red-400/40',
        hoverBorder: 'hover:border-red-400/60'
      }
    ].map((item) => (
      <button
        key={item.level}
        type="button"
        className={`flex-1 p-3 bg-white/5 backdrop-blur-sm border ${item.borderColor} ${item.hoverBorder} ${item.textColor} rounded-xl font-medium hover:bg-white/10 hover:scale-105 focus:scale-105 transition-all duration-200 shadow-lg text-sm`}
      >
        {item.level}
      </button>
    ))}
  </div>
</div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#0a87e6] to-[#27a1ff] rounded-xl text-white font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-2xl shadow-purple-500/25"
              >
                Start Interview Session
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InterviewForm;