"use client";
import { useState } from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";

export default function DashboardHeader({ sidebarWidth }) {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <header
      className="fixed top-0 right-0 z-40 flex items-center justify-between
                 p-6 bg-indigo-400 shadow-md transition-all duration-300"
      style={{
        left:
          typeof sidebarWidth === "number" ? `${sidebarWidth}px` : sidebarWidth,
        width: `calc(100% - ${sidebarWidth})`,
      }}
    >
      <div>
        <h1 className="text-3xl font-bold text-white">My Resumes</h1>
        <p className="text-black">Manage, create, and export your resumes</p>
      </div>
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center w-10 h-10 rounded-full
                     bg-white/80 hover:bg-white focus:outline-none"
        >
          <Image
            width={10}
            height={10}
            src="/user.jpg"
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </button>

        {open && (
          <div
            className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg
                       border border-gray-200"
          >
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2 px-4 py-2 text-gray-700"
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
