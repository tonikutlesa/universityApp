import { create } from "zustand";
import axios from "axios";

const useStudentsStore = create((set) => ({
  students: [],
  fetchStudents: async (url) => {
    await axios.get(url).then((res) => set({ students: res.data.results }));
  },
}));

export { useStudentsStore };
