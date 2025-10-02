"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { status, error, user } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
  };

  useEffect(() => {
    if (status === "succeeded" && user) {
      router.push("/dashboard");
    }
  }, [status, user, router]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-sm w-full mx-auto p-8 bg-white/90 rounded-2xl shadow-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="border border-gray-300 rounded-lg p-3 w-full 
           text-gray-900 placeholder-gray-400
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-3 w-full 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg p-3 w-full 
           text-gray-900 placeholder-gray-400
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-indigo-600 hover:bg-indigo-700 
                 text-white py-3 rounded-lg transition font-medium"
          >
            {status === "loading" ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
}
