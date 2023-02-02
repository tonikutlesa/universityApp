import { create } from "zustand";
import { devtools } from "zustand/middleware";

const userStore = (set) => ({
  isSignedIn: false,
  signIn: () => set((state) => ({ isSignedIn: true })),
  signOut: () => set((state) => ({ isSignedIn: false })),
});

const useUserStore = create(devtools(userStore));

export { useUserStore };
