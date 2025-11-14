
import { create } from "zustand";
import api from "@/lib/axios";

export const useInterviewStore = create((set, get) => ({
  interviews: [],
  loading: false,

  createInterview: async (data) => {
    set({ loading: true });
    try {
      const res = await api.post("/interview", data);
      const interview = res.data;

      set((state) => ({
        interviews: [interview, ...state.interviews],
        loading: false,
      }));

      return interview;
      
    } catch (error) {
      console.error("Failed to create interview:", error);
      set({ loading: false });
      throw error;
    }
  },
}));
