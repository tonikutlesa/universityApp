import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { create } from "zustand";

const useUserStore = create((set) => ({
  isSignedIn: false,
  signIn: () => set((state) => ({ isSignedIn: true })),
  signOut: () => set((state) => ({ isSignedIn: false })),
}));

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
export { useUserStore };
