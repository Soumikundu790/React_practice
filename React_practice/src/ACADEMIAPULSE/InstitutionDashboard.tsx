import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InstitutionDashboard() {
  const navigate = useNavigate();
  const [data] = useState({
    enrollment: 885,
    attendance: 87.5,
    completion: 76.8,
    elevatedRisk: 230,
  });

  return (
    <div className="h-screen bg-[url('/src/Dropout_Detectives/assets/server-bg.jpg')] bg-cover bg-center text-cyan-300 p-8 backdrop-blur-lg">
      {/* Header */}
      <header className="flex items-center justify-between mb-8 border-b border-cyan-700/50 pb-3">
        <h1 className="text-2xl font-semibold text-cyan-400">
           ACADEMIA PULSE - INSTITUTIONAL COMMAND CENTER
        </h1>
        <nav className="flex gap-6 text-sm text-gray-300">
          <button className="hover:text-cyan-400 flex items-center gap-1">
            👥 Students
          </button>
          <button className="hover:text-cyan-400 flex items-center gap-1">
            📊 Analytics
          </button>
          <button className="hover:text-cyan-400 flex items-center gap-1">
            👨‍🏫 Staff
          </button>
          <button className="hover:text-cyan-400 flex items-center gap-1">
            ⚙️ Settings
          </button>
          <button
            onClick={() => navigate("/")}
            className="ml-6 px-3 py-1 border border-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-all"
          >
            🚪 Logout
          </button>
        </nav>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Stats Section */}
        <div className="space-y-6">
          <div className="p-5 bg-black/40 border border-cyan-500/40 rounded-xl">
            <h2 className="text-gray-400 text-sm">TOTAL ENROLLMENT</h2>
            <p className="text-3xl font-semibold text-cyan-300">
              {data.enrollment}
            </p>
            <p className="text-sm text-red-400">↑ 5.2% last quarter</p>
          </div>

          <div className="p-5 bg-black/40 border border-cyan-500/40 rounded-xl">
            <h2 className="text-gray-400 text-sm">ATTENDANCE RATE</h2>
            <p className="text-3xl font-semibold text-cyan-300">
              {data.attendance}%
            </p>
            <p className="text-sm text-green-400">+1.1%</p>
          </div>

          <div className="p-5 bg-black/40 border border-cyan-500/40 rounded-xl">
            <h2 className="text-gray-400 text-sm">COURSE COMPLETION</h2>
            <p className="text-3xl font-semibold text-cyan-300">
              {data.completion}
            </p>
          </div>
        </div>

        {/* Circular Chart Section */}
        <div className="col-span-2 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div className="w-64 h-64 border-[6px] border-cyan-600/40 rounded-full animate-pulse"></div>
            <div className="absolute w-52 h-52 border-[6px] border-cyan-400/70 rounded-full blur-[2px]"></div>
            <div className="absolute text-center">
              <h3 className="text-lg text-gray-400">TOTAL STUDENT BODY</h3>
              <p className="text-2xl text-cyan-300 font-semibold">
                ELEVATED RISK ({data.elevatedRisk})
              </p>
            </div>
          </div>

          <div className="mt-10 p-5 bg-black/40 border border-cyan-500/40 rounded-xl text-sm w-[70%]">
            <h3 className="text-gray-300 mb-2">RISK FACTOR BREAKDOWN</h3>
            <p className="text-gray-400">
              Low GPA 34% • Behavioural 25% • Attendance 18% • Financial 15%
            </p>
            <div className="flex justify-end mt-4 gap-4">
              <button className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-all">
                View Profile
              </button>
              <button className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-all">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="mt-10 bg-black/40 border border-red-500/40 rounded-xl p-5 text-sm">
        <h3 className="text-red-400 font-semibold mb-2">ACTIVE ALERTS</h3>
        <p className="text-red-300">
          ⚠️ CRITICAL: Student STU112 — 3 assignments pending, 2 missing grades.
          <br />
          ACTION REQUIRED: 1:1 Mentorship session open.
        </p>
        <div className="flex justify-end mt-3">
          <button className="px-4 py-2 border border-red-400 rounded-lg hover:bg-red-500/20 transition-all">
            Resolve All
          </button>
        </div>
      </div>
    </div>
  );
}
