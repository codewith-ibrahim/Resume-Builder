import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { userId } = auth();
  if (!userId) redirect("/login");

  return <>{children}</>;
}
