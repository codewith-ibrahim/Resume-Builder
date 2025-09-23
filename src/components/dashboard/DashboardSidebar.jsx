"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, FileText, PlusCircle, Download } from "lucide-react";

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/dashboard", label: "My Resumes", icon: FileText },
    { href: "/dashboard/editor", label: "Create Resume", icon: PlusCircle },
    { href: "/dashboard/export", label: "Export", icon: Download },
  ];

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-indigo-400 text-white h-screen p-4 flex flex-col transition-all duration-300 overflow-hidden`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`mb-6 p-2 rounded-md hover:bg-indigo-600 flex items-center 
          ${collapsed ? "justify-center" : "justify-start"}`}
      >
        <Menu size={20} />
      </button>

      {/* Nav links */}
      <nav
        className={`flex-1 ${
          collapsed ? "flex flex-col items-center gap-6" : "space-y-4"
        }`}
      >
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`p-2 rounded-md flex items-center transition-all duration-300 
                ${collapsed ? "justify-center" : "gap-3 justify-start"}
                ${
                  isActive
                    ? "bg-indigo-600 text-white font-medium"
                    : "hover:bg-indigo-500 text-gray-100"
                }`}
            >
              <Icon size={22} />
              <span
                className={`transition-opacity duration-200 ${
                  collapsed
                    ? "opacity-0 delay-0 w-0 overflow-hidden"
                    : "opacity-100 delay-200"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
