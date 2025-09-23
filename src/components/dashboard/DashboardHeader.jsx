"use client";
import { useState } from "react";
import { LogOut } from "lucide-react";

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="p-6 bg-indigo-400 mb-6 flex items-center justify-between">
      {/* Left: Title + Subtitle */}
      <div>
        <h1 className="text-3xl font-bold text-white">My Resumes</h1>
        <p className="text-black">Manage, create, and export your resumes</p>
      </div>

      {/* Right: Avatar + Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500 focus:outline-none"
        >
          {/* Dummy profile image */}
          <img
            src="https://i.pravatar.cc/100" 
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </button>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
            <button
              onClick={() => alert("Logout clicked")} // Replace with actual logout
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
