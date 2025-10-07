import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentLoginPortal() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim() !== "") {
      navigate("/dashboard");
    } else {
      alert("Please enter your email to continue.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/src/Dropout_Detectives/assets/server-bg.jpg')] bg-cover bg-center backdrop-blur-sm text-cyan-300">
      <div className="bg-black/40 backdrop-blur-xl border border-cyan-700/50 rounded-2xl p-10 shadow-2xl w-[90%] max-w-lg text-center">
        <h1 className="text-2xl font-semibold mb-2 text-cyan-400">
         ACADEMIA PULSE
        </h1>
        <p className="text-gray-300 mb-8 tracking-wide">ACCESS YOUR PORTAL</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="border border-cyan-500/40 hover:border-cyan-400 p-4 rounded-xl bg-black/30 flex flex-col items-center transition-all hover:scale-105">
            <span className="text-2xl mb-2">💼</span>
            INSTITUTIONAL LOGIN
          </button>

          <button className="border border-cyan-500/40 hover:border-cyan-400 p-4 rounded-xl bg-black/30 flex flex-col items-center transition-all hover:scale-105">
            <span className="text-2xl mb-2">🎓</span>
            STUDENT LOGIN
          </button>

          <button className="border border-cyan-500/40 hover:border-cyan-400 p-4 rounded-xl bg-black/30 flex flex-col items-center transition-all hover:scale-105">
            <span className="text-2xl mb-2">👩‍🏫</span>
            INSTRUCTOR LOGIN
          </button>

          <button className="border border-cyan-500/40 hover:border-cyan-400 p-4 rounded-xl bg-black/30 flex flex-col items-center transition-all hover:scale-105">
            <span className="text-2xl mb-2">👨‍👩‍👧</span>
            PARENT / GUARDIAN
          </button>
        </div>

        <input
          type="email"
          placeholder="Username / Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-transparent border border-cyan-600 focus:outline-none focus:border-cyan-300 placeholder-gray-400"
        />
        <div className="flex justify-between text-sm text-gray-400 mb-6">
          <span></span>
          <a href="#" className="hover:text-cyan-400">
            Forgot Password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:bg-cyan-500/40 transition-all"
        >
          LOGIN
        </button>

        <div className="mt-6 flex justify-center">
          <button className="p-3 border border-cyan-400/50 rounded-full hover:bg-cyan-500/20 transition-all">
            <span className="text-xl">🎧</span>
          </button>
        </div>
      </div>
    </div>
  );
}
