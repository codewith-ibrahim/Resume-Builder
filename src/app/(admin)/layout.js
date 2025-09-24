// app/(admin)/layout.js
"use client";
import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? "5rem" : "16rem";

  return (
    <div className="min-h-screen relative">
      <DashboardSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: sidebarWidth }}
      >
        <DashboardHeader sidebarWidth={sidebarWidth} />
        <main className="p-6 absolute top-30">{children}</main>
      </div>
    </div>
  );
}
