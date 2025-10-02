"use client";
import { useSelector } from "react-redux";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardPage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <ProtectedRoute>
      <DashboardHeader sidebarWidth="250px" />
      <main className="p-6">
        <h2 className="text-center text-black text-xl font-bold">
          Welcome {user?.username || "User"} to your Dashboard
        </h2>
      </main>
    </ProtectedRoute>
  );
}
