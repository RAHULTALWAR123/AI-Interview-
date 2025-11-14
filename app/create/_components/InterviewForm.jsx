"use client";
import { useInterviewStore } from "@/stores/useInterviewStore";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ for navigation
import { FaBriefcase, FaFileAlt, FaChartBar, FaArrowRight } from "react-icons/fa";

function InterviewForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    interviewType: "",
    difficulty: "",
  });

  const { createInterview, loading } = useInterviewStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Create interview
      const interview = await createInterview(formData);

      // ✅ Redirect to the interview page
      if (interview?.id) {
        router.push(`/interview/${interview.id}`);
      }
    } catch (error) {
      console.error("Error creating interview:", error);
      alert("Failed to create interview");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 pt-40">
      <div className="relative w-full max-w-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl shadow-purple-500/10"></div>

        <div className="relative z-10 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Create New Interview</h2>
            <p className="text-gray-300">Configure your personalized AI interview session</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Interview Title */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white font-medium text-sm">
                <FaBriefcase className="text-purple-400" />
                Interview Title
              </label>
              <input
                type="text"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
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
                {["Technical", "HR", "Behavioral"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, interviewType: type })}
                    className={`p-3 rounded-xl border ${
                      formData.interviewType === type
                        ? "bg-purple-500/30 border-purple-400 text-white"
                        : "bg-white/5 border-white/10 text-gray-300"
                    } hover:bg-white/10 hover:border-purple-400/30 transition-all duration-200 text-sm font-medium`}
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
                placeholder="Paste the job description here..."
                value={formData.jobDescription}
                onChange={(e) =>
                  setFormData({ ...formData, jobDescription: e.target.value })
                }
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
                {["Easy", "Medium", "Hard", "Expert"].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setFormData({ ...formData, difficulty: level })}
                    className={`flex-1 p-3 border rounded-xl font-medium text-sm transition-all duration-200 ${
                      formData.difficulty === level
                        ? "border-purple-400 bg-purple-500/20 text-white"
                        : "border-white/10 bg-white/5 text-gray-300 hover:border-purple-400/40 hover:bg-white/10"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-semibold transition-all duration-200 shadow-2xl ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#0a87e6] to-[#27a1ff] hover:from-purple-600 hover:to-pink-600 hover:scale-105"
                }`}
              >
                {loading ? "Creating..." : "Start Interview Session"}
                {!loading && <FaArrowRight className="text-sm" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InterviewForm;
