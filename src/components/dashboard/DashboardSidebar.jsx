"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, FileText, PlusCircle, Download } from "lucide-react";

export default function DashboardSidebar({ collapsed, setCollapsed }) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/dashboard", label: "My Resumes", icon: FileText },
    { href: "/dashboard/editor", label: "Create Resume", icon: PlusCircle },
    { href: "/dashboard/export", label: "Export", icon: Download },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen bg-indigo-400 text-white
        p-4 flex flex-col transition-all duration-300 overflow-hidden
        ${collapsed ? "w-20" : "w-64"}`}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`mb-6 p-2 rounded-md hover:bg-indigo-600 flex items-center 
          ${collapsed ? "justify-center" : "justify-start"}`}
      >
        <Menu size={20} />
      </button>

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
                    ? "opacity-0 w-0 overflow-hidden"
                    : "opacity-100"
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
