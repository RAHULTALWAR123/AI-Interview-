import React from 'react';
import { FaMagic, FaPlay, FaInfoCircle } from 'react-icons/fa';

function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge with magic icon */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
          <FaMagic className="text-blue-300 animate-pulse" fontSize={20} />
          <span className="text-sm font-medium text-blue-200">
            Voice-powered AI interview practice
          </span>
        </div> */}

        {/* Main heading */}
        <h1 className="text-9xl md:text-8xl font-semibold text-white leading-tight">
          Ace your next<br />
          <span className="bg-linear-to-r from-[#0a87e6] to-[#025799] bg-clip-text text-transparent">
            interview!
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Talk with our personalised AI powered interview coach. Practice in a real-time interview and get{' '}
          <span className="text-[#0a87e6] font-semibold">actionable feedback</span>.<br />
          The world&apos;s most powerful AI interviewer.
        </p>

        {/* CTA Button with info */}
        <div className="space-y-4">
          <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-linear-to-br from-[#0a87e6] to-[#025799] rounded-xl hover:from-[#0a87e6] hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-2xl shadow-purple-500/25">
            <FaPlay className="text-sm" />
            Start My Interview
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <FaInfoCircle className="text-xs" />
            <span>No credit card required • Free trial</span>
          </div>
        </div>

        

      
      </div>
    </div>
  );
}

export default Landing;