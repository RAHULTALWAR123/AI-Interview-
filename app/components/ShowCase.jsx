import React from 'react';
import Image from 'next/image';

function ShowCase() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="relative">
        {/* Gradient glow effect */}
        {/* <div className="absolute inset-0 -z-10">
          
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full scale-150"></div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-600/10 blur-2xl rounded-full scale-125"></div>
        </div> */}

        {/* Image container with border gradient */}
        <div className="relative">
          {/* Gradient border - increased size */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#0a87e6] via-purple-500 to-indigo-600 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Main image - increased container size */}
          <div className="relative rounded-2xl overflow-hidden p-2">
            <Image
              src="/testing.avif"
              alt="Showcase"
              width={900}  // Increased width
              height={800}   // Increased height
              className="rounded-xl " // Added max-width
            />
          </div>

          {/* Additional glow effects - increased size */}
          {/* <div className="absolute -inset-12 -z-10">
            <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500/30 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ShowCase;