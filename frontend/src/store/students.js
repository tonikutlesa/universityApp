import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";

const studentStore = (set) => ({
  students: [],
  fetchAllStudents: async (url) => {
    await axios.get(url).then((res) => set({ students: res.data.results }));
  },
});

const useStudentsStore = create(devtools(studentStore));

export { useStudentsStore };
