import { create } from "zustand";

const useUserStore = create((set) => ({
  isSignedIn: false,
  signIn: () => set((state) => ({ isSignedIn: true })),
  signOut: () => set((state) => ({ isSignedIn: false })),
}));

export { useUserStore };
